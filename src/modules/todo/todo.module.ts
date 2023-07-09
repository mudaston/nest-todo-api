import { Module } from '@nestjs/common';

import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoRepo } from './todo.repo';

@Module({ controllers: [TodoController], providers: [TodoService, TodoRepo] })
export class TodoModule {}
