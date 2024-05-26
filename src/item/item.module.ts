import { Module } from '@nestjs/common';
import { ItemService } from './service/item.service';
import { ItemController } from './controller/item.controller';

@Module({
  providers: [ItemService],
  controllers: [ItemController]
})
export class ItemModule {}
