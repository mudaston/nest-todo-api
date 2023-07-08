import {
  IsString,
  MaxLength,
  IsArray,
  IsOptional,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';
import { Transform } from 'class-transformer';

import { BaseDTO } from '@shared/dto/base-dto';

export class CreateUserDTO {
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class GetUsersDTO extends BaseDTO {
  @IsOptional()
  @IsArray()
  @Transform(({ value }) => value.trim().split(',').map(Number))
  id?: number[];

  @IsOptional()
  @IsNumber()
  page? = 0;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => {
    const limit = Number(value);
    if (limit > 20) return 100;
    return limit;
  })
  limit? = 20;
}
