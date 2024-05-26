import { Module } from '@nestjs/common';
import { FreteService } from './service/frete.service';
import { FreteController } from './controller/frete.controller';
import { Frete } from './entity/frete.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Frete,TicketCompras,Perfis])],
  providers: [FreteService],
  controllers: [FreteController],
})
export class FreteModule {}
