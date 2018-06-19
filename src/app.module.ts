import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UsersService } from './services/users/users.service';
import { NotificationsService } from './services/notifications/notifications.service';
import { NotificationsController } from './controllers/notifications/notifications.controller';
import { UsersController } from './controllers/users/users.controller';
import { DefaultController } from './controllers/default/default.controller';
import { DefaultService } from './services/default/default.service';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';

@Module({
  imports: [],
  controllers: [
    UsersController,
    NotificationsController,
    DefaultController,
  ],
  providers: [
    UsersService,
    NotificationsService,
    DefaultService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
