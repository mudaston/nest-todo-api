import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { TodoService } from './todo.service';
import { GetTodoDTO, CreateTodoDTO } from './todo.dto';

@Controller('api')
export class TodoController {
  constructor(private readonly service: TodoService) {}

  @Get('todos')
  async getTodos(@Query() dto: GetTodoDTO) {
    const { id, order } = dto;

    const todos = await this.service.getTodos({ orderBy: { id: order }, id });

    return todos;
  }

  @Post('todo')
  async createTodo(@Body() dto: CreateTodoDTO) {
    const todo = await this.service.createTodo({ data: dto });

    return todo;
  }
}
