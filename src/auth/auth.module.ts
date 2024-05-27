import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { LoginModule } from 'src/login/login.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from 'src/login/entity/login.entity';

import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthService } from './service/auth.service';


@Module({
  imports: [TypeOrmModule.forFeature([Login]), 
    JwtModule.register({
      secret: process.env.JWT_SECRET, 
      signOptions: { expiresIn: '60m' },
    }),
    LoginModule,
    PassportModule,
  ],
  providers: [AuthService, JwtStrategy, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
