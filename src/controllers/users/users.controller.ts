import { UserModel } from './../../models/user.model';
import { UsersService } from './../../services/users/users.service';
import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
  ) { }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() user: UserModel) {
    return this.usersService.create(user);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() update: any) {
    return this.usersService.update(id, update);
  }
}
