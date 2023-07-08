import { Injectable } from '@nestjs/common';

import { PrismaService } from '@app/database';

import type { GetTodos, CreateTodo } from './types';

@Injectable()
export class TodoRepo {
  constructor(private readonly orm: PrismaService) {}

  async getTodos(params: GetTodos) {
    const { orderBy } = params;

    const todos = await this.orm.todo.findMany({
      orderBy,
      select: {
        id: true,
        name: true,
        description: true,
        completed: true,
        authorId: true,
      },
    });

    return todos;
  }

  async createTodo(params: CreateTodo) {
    const { data } = params;

    const todo = await this.orm.todo.create({ data });

    return todo;
  }
}
