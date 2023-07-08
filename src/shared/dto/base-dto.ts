import { IsEnum } from 'class-validator';
import { Prisma } from '@prisma/client';

export class BaseDTO {
  @IsEnum(Prisma.SortOrder)
  order: Prisma.SortOrder = 'asc';
}
