import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Login } from 'src/login/entity/login.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Login)
    private loginRepository: Repository<Login>,
    private jwtService: JwtService,
  ) {}

  async validateLogin(email: string, senha: string): Promise<any> {
    const login = await this.loginRepository.findOne({ where: { email } });
    if (login && await bcrypt.compare(senha, login.senha)) {
      const { senha, ...result } = login;
      return result;
    }
    return null;
  }

  async login(login: any) {
    const payload = { username: login.email, sub: login.id_login };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}