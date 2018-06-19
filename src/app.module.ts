import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from '_middlewares/logger/logger.middleware';
import { NotificationsController } from 'notifications/notifications.controller';
import { UsersController } from 'users/users.controller';
import { UsersService } from 'users/users.service';
import { NotificationsService } from 'notifications/services/notifications.service';
import { AmqpNotificationsService } from 'notifications/services/amqpNotifications.service';
import { UsersModule } from 'users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
