import { Module } from '@nestjs/common';
import { Login } from './entity/login.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginService } from './service/login.service';
import { LoginController } from './controller/login.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Login])],
  providers: [LoginService],
  controllers: [LoginController]
})
export class LoginModule {}
