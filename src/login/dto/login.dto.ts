export class LoginDto { }

import { IsEmail, IsString, Length, Matches } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';


export class CreateLoginDto {
  @ApiProperty({ description: 'Email do usuário' })
  @IsEmail()
  @Length(8, 40, { message: 'o tamanho minimo do e-mail é 8 caracteres' })
  email: string;

  @ApiProperty({ description: 'Senha do usuário' })
  @IsString()
  @Matches(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[\W_]).{8,}$/, {
    message:
      'a senha deve ter pelo menos 8 caracteres, incluindo uma pelo menos: uma letra maiúscula, uma letra minúscula, um número e um caractere especial',
  })
  senha: string;
}

export class UpdateLoginDto extends PartialType(CreateLoginDto) {}