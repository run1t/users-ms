import { Connection } from 'mongoose';
import { DB_TOKEN } from '_database/database.const';
import { USER_TOKEN, USER_MODEL_NAME } from './users.const';
import { UserSchema } from '../models/users.schema';

export const usersProviders = [
  {
    provide: USER_TOKEN,
    useFactory: (connection: Connection) =>
      connection.model(USER_MODEL_NAME, UserSchema),
    inject: [DB_TOKEN],
  },
];
