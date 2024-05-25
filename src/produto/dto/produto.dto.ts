import { IsNumber, IsString, Length } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class ProdutoDto {}

export class CreateProdutoDto {
  @ApiProperty({ description: 'Nome do Produto' })
  @IsString()
  @Length(8, 40, { message: 'o tamanho minimo do nome é 8 caracteres' })
  nome: string;

  @ApiProperty({ description: 'Valor do produto' })
  @IsNumber()
  valor: number;

  @ApiProperty({ description: 'Quantidade de produtos' })
  @IsNumber()
  qtdProduto: number;

  @ApiProperty({ description: 'Descrição do produto' })
  @IsString()
  @Length(20, 100, { message: 'o tamanho minimo do nome é 20 caracteres' })
  descricao: string;
}

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {}
