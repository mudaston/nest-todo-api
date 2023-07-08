import { Prisma } from '@prisma/client';

export type GetTodos = {
  orderBy?: Prisma.TodoOrderByWithRelationInput;
};

export type CreateTodo = {
  data: Prisma.TodoCreateInput;
};
