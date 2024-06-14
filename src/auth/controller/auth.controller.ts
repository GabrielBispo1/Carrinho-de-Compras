import { Controller, Post, Body, NotFoundException } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { LoginDto } from 'src/login/dto/login.dto';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  @ApiCreatedResponse({ description: 'Usuário autenticado com sucesso' })
  @ApiUnauthorizedResponse({ description: 'Credenciais inválidas' })
  @ApiBody({
    description: 'Objeto contendo email e senha do usuário',
    type: LoginDto
  })
  async login(
    @Body()
    {email, senha}
  ) {
    const login = await this.authService.validateLogin(email, senha);
    if (!login) {
      throw new NotFoundException('Credenciais inválidas');
    }
    return this.authService.login(login);
  }


}
