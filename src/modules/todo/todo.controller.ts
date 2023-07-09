import { Controller, Get, Query } from '@nestjs/common';

import { TodoService } from './todo.service';
import { GetTodoDTO } from './todo.dto';

Controller('api');
export class TodoController {
  constructor(private readonly service: TodoService) {}

  @Get()
  async getTodos(@Query() dto: GetTodoDTO) {
    const { id, order } = dto;

    const todos = await this.service.getTodos({ orderBy: { id: order }, id });

    return todos;
  }
}
