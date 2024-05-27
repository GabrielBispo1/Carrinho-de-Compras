import { Module } from '@nestjs/common';
import { FreteService } from './service/frete.service';
import { FreteController } from './controller/frete.controller';
import { Frete } from './entity/frete.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Perfil } from 'src/perfil/entity/perfil.entity';
import { Ticket } from 'src/ticket/entity/ticket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Frete,Ticket,Perfil])],
  providers: [FreteService],
  controllers: [FreteController],
})
export class FreteModule {}
