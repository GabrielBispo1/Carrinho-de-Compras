import { Module } from '@nestjs/common';
import { TicketService } from './service/ticket.service';
import { TicketController } from './controller/ticket.controller';
import { Ticket } from './entity/ticket.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/item/entity/item.entity';
import { Login } from 'src/login/entity/login.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket,Item,Login])],
  providers: [TicketService],
  controllers: [TicketController],
  exports: [TicketService],
})
export class TicketModule {}