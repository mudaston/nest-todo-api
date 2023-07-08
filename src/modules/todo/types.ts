import { Prisma } from '@prisma/client';

export type CreateTodo = {
  data: Prisma.TodoCreateInput;
};
