import * as mongoose from 'mongoose';
import { DB_TOKEN } from './database.const';

export const databaseProviders = [
  {
    provide: DB_TOKEN,
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://localhost/nest'),
  },
];
