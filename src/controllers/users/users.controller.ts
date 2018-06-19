import { UsersService } from './../../services/users/users.service';
import { Controller, Get, Post, Delete, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
  ) { }

  @Get()
  findAll() {
    // throw new Error('Not yet implemented');
    return this.usersService.findAll();
  }

  @Post()
  create() {
    throw new Error('Not yet implemented');
  }

  @Delete()
  delete() {
    throw new Error('Not yet implemented');
  }

  @Get(':id')
  findOne() {
    throw new Error('Not yet implemented');
  }

  @Put(':id')
  update() {
    throw new Error('Not yet implemented');
  }
}
