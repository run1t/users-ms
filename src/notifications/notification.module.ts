import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { LoggerMiddleware } from '_middlewares/logger/logger.middleware';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './services/notifications.service';
import { AmqpNotificationsService } from './services/amqpNotifications.service';
import { UsersModule } from 'users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [NotificationsController],
  providers: [NotificationsService, AmqpNotificationsService],
})
export class NotificationsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(NotificationsController);
  }
}
