import {
  Injectable,
  MiddlewareFunction,
  NestMiddleware,
  Logger,
} from '@nestjs/common';

/* tslint:disable:no-console */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      const context = 'Request Logger';
      const message = `${req.method}] - ${req.originalUrl}`;

      Logger.log(message, context);

      console.log(`********* Request Body *********`);
      console.log(`${JSON.stringify(req.body)}`);
      console.log(`********* Query *********`);
      console.log(`${JSON.stringify(req.query)}`);
      console.log(`********* Params *********`);
      console.log(`${JSON.stringify(req.params)}`);
      next();
    };
  }
}
