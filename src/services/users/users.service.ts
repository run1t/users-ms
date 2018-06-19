import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserModel } from './../../models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
  ) { }

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
