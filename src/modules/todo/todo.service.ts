import { Injectable } from '@nestjs/common';

import { TodoRepo } from './todo.repo';

import type { GetTodos } from './types';

@Injectable()
export class TodoService {
  constructor(private readonly repo: TodoRepo) {}

  async getTodos(params: GetTodos) {
    const todos = await this.repo.getTodos(params);

    return todos;
  }
}
