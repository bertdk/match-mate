import { ArgumentsHost, Catch, HttpServer } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import { BaseExceptionFilter } from '@nestjs/core/exceptions/base-exception-filter';
import { AbstractHttpAdapter } from '@nestjs/core/adapters/http-adapter';

@Catch()
export class SentryFilter extends BaseExceptionFilter {
  override handleUnknownError(
    exception: any,
    host: ArgumentsHost,
    applicationRef: HttpServer<any, any> | AbstractHttpAdapter<any, any, any>,
  ): void {
    Sentry.captureException(exception);
    super.handleUnknownError(exception, host, applicationRef);
  }
}
