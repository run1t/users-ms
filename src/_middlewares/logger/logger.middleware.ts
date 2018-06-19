import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  resolve(..._: any[]): MiddlewareFunction {
    return (req, _, next) => {
      console.log(
        `[${req.method}] - ${req.originalUrl}`,
        req.body,
        req.params,
        req.query,
      );
      next();
    };
  }
}
