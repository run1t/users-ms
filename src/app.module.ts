import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { NotificationsController } from './controllers/notifications/notifications.controller';
import { UsersController } from './controllers/users/users.controller';

import { LoggerMiddleware } from './middlewares/logger/logger.middleware';

import { UserSchema } from './schemas/user.schema';

import { NotificationsService } from './services/notifications/notifications.service';
import { UsersService } from './services/users/users.service';
import { AmqpNotificationsService } from 'services/notifications/amqpNotifications.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:/nest'),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UsersController, NotificationsController],
  providers: [UsersService, NotificationsService, AmqpNotificationsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
