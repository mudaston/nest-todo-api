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

import { BaseDTO } from '@shared/dto/base-dto';

export class GetTodoDTO extends BaseDTO {
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
