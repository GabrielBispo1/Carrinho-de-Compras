export class ItemDto {}

import { IsInt, IsNumber, Length, isInt } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty({ description: 'Valor do item' })
  @IsNumber()
  @Length(1, 7)
  valor: number;

  @ApiProperty({ description: 'Quantidade de itens' })
  @IsNumber()
  @Length(1, 99)
  qtdItem: number;

  @ApiProperty({ description: 'ID do Produto' })
  @IsInt()
  produtoId: number;

  @ApiProperty({ description: 'ID do Ticket' })
  @IsInt()
  ticketId: number;
}

export class UpdateItemDto extends PartialType(CreateItemDto) {}