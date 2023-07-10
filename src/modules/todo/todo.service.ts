import { Injectable } from '@nestjs/common';

import { TodoRepo } from './todo.repo';

import type { GetTodos, CreateTodo } from './types';

@Injectable()
export class TodoService {
  constructor(private readonly repo: TodoRepo) {}

  async getTodos(params: GetTodos) {
    const todos = await this.repo.getTodos(params);

    return todos;
  }

  async createTodo(data: CreateTodo) {
    const todo = await this.repo.createTodo(data);

    return todo;
  }
}
