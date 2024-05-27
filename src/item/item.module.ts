import { Module } from '@nestjs/common';
import { ItemService } from './service/item.service';
import { ItemController } from './controller/item.controller';
import { Item } from './entity/item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from 'src/ticket/entity/ticket.entity';
import { Produto } from 'src/produto/entity/produto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item, Ticket, Produto])],
  providers: [ItemService],
  controllers: [ItemController]
})
export class ItemModule {}
