import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { USER_TOKEN } from './config/users.const';
import { User } from './models/users.interface';
import { UserModel } from './models/users.model';

@Injectable()
export class UsersService {
  constructor(@Inject(USER_TOKEN) private readonly userModel: Model<User>) {}

  async create(user: UserModel): Promise<User> {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async delete(id: string): Promise<any> {
    return await this.userModel.findByIdAndRemove(id);
  }
  async findOne(id: string): Promise<any> {
    return await this.userModel.findById(id);
  }
  async update(id: string, update: any): Promise<any> {
    return await this.userModel.findByIdAndUpdate(id, update);
  }
}
