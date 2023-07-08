import { IsOptional, IsArray } from 'class-validator';
import { Transform } from 'class-transformer';
import { Prisma } from '@prisma/client';

interface IBaseDTO {
  order: Prisma.SortOrder;
}

export class GetTodoDTO {
  order;

  constructor(private readonly baseDTO: IBaseDTO) {
    this.order = baseDTO.order;
  }

  @IsOptional()
  @IsArray()
  @Transform(({ value }) => value.trim().split(',').map(Number))
  id?: number[];
}
