export class PerfilDto {}
import { IsEmail, IsString, Length, Matches } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreatePerfilDto {
  @IsString()
  @Length(8, 40, { message: 'o tamanho minimo do nome é 8 caracteres' })
  nome: string;

  @IsString()
  @Length(40)
  endereco: string;

  @IsString()
  @Length(40)
  cidade: string;

  @IsString()
  @Length(2)
  estado: string;

  @IsString()
  @Length(40)
  bairro: string;

  @IsString()
  @Length(40)
  numero: string;

  @IsString()
  @Length(9)
  cep: string;

  @IsString()
  @Length(14)
  cpf: string;

  @IsString()
  @Length(12)
  rg: string;

  @IsString()
  @Length(12)
  telefone: string;


}
