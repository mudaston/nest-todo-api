import { Prisma } from '@prisma/client';

export type GetTodos = {
  orderBy?: Prisma.TodoOrderByWithRelationInput;
};
