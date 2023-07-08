import { Prisma } from '@prisma/client';

export type GetUsers = {
  id: number[];
  skip: number;
  take: number;
  order: Prisma.SortOrder;
};

export type CreateUser = Prisma.UserCreateWithoutTodoInput;
