import { IsNumber, IsString, Length } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFreteDto {
  @ApiProperty({ description: 'CEP do remetente' })
  @IsString()
  @Length(9, 9, {
    message: 'Insira os números do CPF sem nenhum caracter especial',
  })
  CEP_remetente: string;

  @ApiProperty({ description: 'Valor do frete' })
  @IsNumber()
  valor: number;
}

export class UpdateFreteDto extends PartialType(CreateFreteDto) {}
