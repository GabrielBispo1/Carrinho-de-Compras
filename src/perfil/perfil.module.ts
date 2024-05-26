import { Module } from '@nestjs/common';
import { Perfil } from './entity/perfil.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilService } from './service/perfil.service';
import { PerfilController } from './controller/perfil.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Perfil])],
  providers: [PerfilService],
  controllers: [PerfilController],
})
export class PerfilModule {}
