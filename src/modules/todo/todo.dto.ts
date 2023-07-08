import {
  IsOptional,
  IsArray,
  MaxLength,
  MinLength,
  IsString,
  IsBoolean,
  IsNumber,
} from 'class-validator';
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

export class CreateTodoDTO {
  @IsString()
  @MaxLength(50)
  @MinLength(5)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(400)
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed = false;

  @IsNumber()
  authorId: number;
}
