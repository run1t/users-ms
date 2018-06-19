import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      console.log(`[${req.method}] - ${req.originalUrl} - ${req.body} - ${req.params} - ${req.query}`);
      next();
    };
  }
}
