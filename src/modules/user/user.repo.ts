import { Injectable } from '@nestjs/common';

import { PrismaService } from '@app/database';

import type { GetUsers, CreateUser } from './types';

@Injectable()
export class UserRepo {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: CreateUser) {
    const user = await this.prisma.user.create({ data });

    return user;
  }

  async getUsers(params: GetUsers) {
    const { id, skip, take } = params;

    const users = await this.prisma.user.findMany({
      where: { id: { in: id } },
      skip,
      take,
      select: {
        id: true,
        username: true,
        profileImage: true,
        role: true,
        todo: {
          select: { id: true, name: true, description: true, completed: true },
        },
      },
    });

    return users;
  }
}
