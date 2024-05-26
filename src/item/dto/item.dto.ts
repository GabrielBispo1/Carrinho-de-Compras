export class ItemDto {}

import { IsInt, IsNumber, Length, isInt } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateItemDto {
  @IsNumber()
  @Length(1, 7)
  valor: number;

  @IsNumber()
  @Length(1, 99)
  qtdItem: number;

  @IsInt()
  produtoId: number;

  @IsInt()
  ticketId: number;
}

export class UpdateItemDto extends PartialType(CreateItemDto) {}