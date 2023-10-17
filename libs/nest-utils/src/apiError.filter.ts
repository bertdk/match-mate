import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { ApiError } from '@match-mate-api/core-utils';

@Catch(ApiError)
export class ApiErrorFilter implements ExceptionFilter {
  catch(error: ApiError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(error.code).json({
      statusCode: error.code,
      message: error.message,
      reason: error.reason,
      payload: error.payload,
    });
  }
}
