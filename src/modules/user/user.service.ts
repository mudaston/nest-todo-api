import { Injectable } from '@nestjs/common';

import { UserRepo } from './user.repo';
import type { CreateUser, GetUsers } from './types';

@Injectable()
export class UserService {
  constructor(private readonly repo: UserRepo) {}

  async createUser(data: CreateUser) {
    const user = await this.repo.createUser(data);

    return user;
  }

  async getUsers(params: GetUsers) {
    const users = await this.repo.getUsers(params);

    return users;
  }
}
