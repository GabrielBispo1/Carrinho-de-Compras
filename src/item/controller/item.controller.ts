import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { CreateItemDto, UpdateItemDto } from '../dto/item.dto';
  import { ItemService } from '../service/item.service';

  @Controller('item')
  export class ItemController {
    constructor(private readonly itemService: ItemService) {}
  
    @Get()
    async findAll(): Promise<any[]> {
      return this.itemService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
      return this.itemService.findOne(id);
    }
  
    @Post()
    async create(@Body() createItemDto: CreateItemDto): Promise<any> {
      return this.itemService.create(createItemDto);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: number,
      @Body() updateItemDto: UpdateItemDto,
    ): Promise<any> {
      return this.itemService.update(id, updateItemDto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
      return this.itemService.delete(id);
    }
  }