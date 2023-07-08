import { Controller, Get, Post, Query, Body } from '@nestjs/common';

import { pagination } from '@shared/helpers';
import { UserService } from './user.service';
import { CreateUserDTO, GetUsersDTO } from './user.dto';

@Controller('api')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post('user')
  async createUser(@Body() dto: CreateUserDTO) {
    const { username, password } = dto;

    const user = await this.service.createUser({ username, password });

    return user;
  }

  @Get('users')
  async getUsers(@Query() dto: GetUsersDTO) {
    const { id, page, limit, order } = dto;

    const { skip, take } = pagination(page, limit);

    const users = await this.service.getUsers({ id, order, skip, take });

    return users;
  }
}
