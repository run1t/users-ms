import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { DatabaseModule } from '_database/database.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from '_middlewares/logger/logger.middleware';
import { usersProviders } from './config/users.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(UsersController);
  }
}
