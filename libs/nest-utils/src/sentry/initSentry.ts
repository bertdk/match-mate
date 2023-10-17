import { INestApplication } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import { HttpAdapterHost } from '@nestjs/core';
import { SentryFilter } from './sentry.filter';

type SentryConfig = {
  dsn: string;
  nodeEnv: string;
  sampleRate: number;
  tracesSampleRate: number;
};
export const initSentry = (
  app: INestApplication,
  sentryConfig: SentryConfig,
) => {
  if (sentryConfig.nodeEnv === 'local') return;

  Sentry.init({
    dsn: sentryConfig.dsn,
    environment: sentryConfig.nodeEnv,
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Sentry.Integrations.Express({ router: app.getHttpAdapter() as any }),
      new Sentry.Integrations.Postgres(),
      new Sentry.Integrations.Console(),
    ],
    tracesSampleRate: sentryConfig.tracesSampleRate,
    sampleRate: sentryConfig.sampleRate,
  });

  app.use(
    Sentry.Handlers.requestHandler({
      ip: true,
      request: true,
      user: ['id'],
    }),
  );
  app.use(Sentry.Handlers.tracingHandler());
  app.use((req: Request, _: unknown, next: () => unknown) => {
    Sentry.configureScope((scope) => {
      scope.addEventProcessor((e) => {
        e?.request?.headers && delete e?.request?.headers['authorization'];
        e.user && (e.user.id = (req as any)?.token?.id);
        return e;
      });
    });
    next();
  });
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new SentryFilter(httpAdapter));
};
