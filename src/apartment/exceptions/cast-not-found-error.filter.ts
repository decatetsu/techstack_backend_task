import {ArgumentsHost, Catch, ExceptionFilter} from "@nestjs/common";
import {Response} from 'express';
import {Error} from "mongoose";
import CastError = Error.CastError;

@Catch(CastError)
export class CastNotFoundErrorFilter implements ExceptionFilter {
  catch(exception: CastError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = 404;

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        message: exception.message,
      });
  }
}
