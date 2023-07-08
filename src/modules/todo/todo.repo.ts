import { Injectable } from '@nestjs/common';

import { PrismaService } from '@app/database';

import type { CreateTodo } from './types';

@Injectable()
export class TodoRepo {
  constructor(private readonly orm: PrismaService) {}

  async createTodo(params: CreateTodo) {
    const { data } = params;

    const todo = await this.orm.todo.create({ data });

    return todo;

    // awdawd
  }
}
