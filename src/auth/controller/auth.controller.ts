
import { Controller, Post, Body, NotFoundException } from '@nestjs/common';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: {email: string, senha: string}) {
    const login = await this.authService.validateLogin(loginDto.email, loginDto.senha);
    if (!login) {
      throw new NotFoundException('Credenciais inválidas');
    }
    return this.authService.login(login);
  }

}
