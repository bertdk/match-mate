import type { RequestHandler, RestHandler, SharedOptions } from 'msw';
import { type SetupServer, setupServer } from 'msw/node';
import type { PartialDeep } from 'type-fest';

import {
  BatchInterceptor,
  type HttpRequestEventMap,
} from '@mswjs/interceptors';
import { ClientRequestInterceptor } from '@mswjs/interceptors/ClientRequest';
import { XMLHttpRequestInterceptor } from '@mswjs/interceptors/XMLHttpRequest';
import { clinicalTrialsGovHandlers } from './clinicalTrialsGov.handler';

/**
 * union of all handlers
 */
type Handler = 'storage';

/**
 * config to enable/disable handlers
 */
export type HandlersConfig = {
  [key in Handler]?: boolean;
};

export type Options = {
  handlers?: HandlersConfig;
  allowedOrigins?: string[];
};

const interceptors = [
  new ClientRequestInterceptor(),
  new XMLHttpRequestInterceptor(),
] as const;

const handlerOriginMap: Record<Handler, string[]> = {
  storage: ['https://clinicaltrials.gov'],
};

const ignoredOrigins = ['127.0.0.1', '169.254.169.254', 'localhost'];

/**
 *
 * The idea behind this class is to provide a way to mock external services and add a layer of security by only allowing requests to the allowed origins.
 * In this case we can be sure that there are no side effects in our tests, and if there are, we can easily identify them.
 *
 */
export class MockedServiceWorker {
  readonly #handlers: RestHandler[] = [];

  readonly #server: SetupServer;

  readonly #interceptor: BatchInterceptor<
    typeof interceptors,
    HttpRequestEventMap
  >;

  readonly #allowedOrigins: string[] = [];

  constructor(options?: Options) {
    const { allowedOrigins = [], handlers = {} } = options ?? {};
    const { storage = true } = handlers;

    if (storage) {
      this.#handlers.push(...clinicalTrialsGovHandlers);
    }

    this.#allowedOrigins = [
      ...this.getAllowedOrigins(handlers),
      ...allowedOrigins,
    ];
    this.#server = setupServer(...this.#handlers);
    this.#interceptor = this.registerInterceptors();
  }

  get server() {
    return this.#server;
  }

  get handlers() {
    return this.#handlers;
  }

  public setupMockedServices(options?: PartialDeep<SharedOptions>) {
    if (this.handlers.length === 0) return;

    this.server.listen(
      options ?? {
        onUnhandledRequest(req) {
          const isIgnoredOrigin = ignoredOrigins.some((x) =>
            req.url.origin.includes(x),
          );
          if (!isIgnoredOrigin) {
            const error = new Error(
              `Found an unhandled ${req.method} request to ${req.url.href}`,
            );
            console.error(error);
            throw error;
          }
        },
      },
    );
  }

  public resetMockedServices(nextHandlers: RequestHandler[] = []) {
    this.server.resetHandlers(...nextHandlers);
  }

  public closeMockedServices() {
    if (this.handlers.length === 0) return;
    this.server.close();
  }

  private registerInterceptors(): BatchInterceptor<
    typeof interceptors,
    HttpRequestEventMap
  > {
    const interceptor = new BatchInterceptor({
      name: 'external-api-interceptor',
      interceptors,
    });

    interceptor.apply();

    interceptor.on('request', ({ request }) => {
      const url = new URL(request.url);
      if (!this.isAllowedOrigin(url.origin)) {
        const error = new Error(
          `Request to ${url.origin} is not allowed. Please add it to the interceptor's allowed origins.`,
        );
        console.error(error);
        throw error;
      }
    });

    return interceptor;
  }

  private getAllowedOrigins(handlersConfig: HandlersConfig) {
    const allowedOrigins = Object.entries(handlersConfig).reduce<string[]>(
      (acc, [handler, isEnabled]) => {
        if (isEnabled) {
          acc.push(...handlerOriginMap[handler as Handler]);
        }
        return acc;
      },
      [],
    );

    return allowedOrigins;
  }

  private isAllowedOrigin(origin: string) {
    return (
      ignoredOrigins.some((x) => origin.includes(x)) ||
      this.#allowedOrigins.includes(origin)
    );
  }
}
