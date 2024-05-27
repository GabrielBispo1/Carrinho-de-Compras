export class PerfilDto {}
import { IsInt, IsString, Length } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePerfilDto {
  @ApiProperty({ description: 'Nome do usuário' })
  @IsString()
  @Length(8, 40, { message: 'o tamanho minimo do nome é 8 caracteres' })
  nome: string;

  @ApiProperty({ description: 'Endereço do usuário' })
  @IsString()
  @Length(40)
  endereco: string;

  @ApiProperty({ description: 'Cidade do usuário' })
  @IsString()
  @Length(40)
  cidade: string;

  @ApiProperty({ description: 'Estado do usuário' })
  @IsString()
  @Length(2)
  estado: string;

  @ApiProperty({ description: 'Bairro do usuário' })
  @IsString()
  @Length(40)
  bairro: string;

  @ApiProperty({ description: 'Número da moradia do usuário' })
  @IsString()
  @Length(40)
  numero: string;

  @ApiProperty({ description: 'CEP do usuário' })
  @IsString()
  @Length(9)
  cep: string;

  @ApiProperty({ description: 'CPF do usuário' })
  @IsString()
  @Length(14)
  cpf: string;

  @ApiProperty({ description: 'RG do usuário' })
  @IsString()
  @Length(12)
  rg: string;

  @ApiProperty({ description: 'Telefone do usuário' })
  @IsString()
  @Length(12)
  telefone: string;

  @ApiProperty({ description: 'ID login do usuário' })
  @IsInt()
  loginId: number;
}

export class UpdatePerfilDto extends PartialType(CreatePerfilDto) {}
