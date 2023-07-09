import { Prisma } from '@prisma/client';

export type GetTodos = {
  id?: number[];
  orderBy?: Prisma.TodoOrderByWithRelationInput;
};

export type CreateTodo = {
  data: Prisma.TodoCreateInput;
};
