import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard.strategy';
  import { CreateItemDto, UpdateItemDto } from '../dto/item.dto';
  import { ItemService } from '../service/item.service';

  @UseGuards(JwtAuthGuard)
  @Controller('item')
  @ApiTags('item')
  export class ItemController {
    constructor(private readonly itemService: ItemService) {}
  
    @Get()
    @ApiOperation({ summary: 'Selecionar todos os itens' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findAll(): Promise<any[]> {
      return this.itemService.findAll();
    }
  
    @Get(':id/:id_ticket')
    @ApiOperation({ summary: 'Selecionar um item' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findOne(@Param('id') id: number,@Param('id_ticket') id_ticket: number): Promise<any> {
      return this.itemService.findOne(id,id_ticket);
      
    }
  
    @Post()
    @ApiOperation({ summary: 'Criar um novo item' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createItemDto: CreateItemDto): Promise<any> {
      console.log('batata',createItemDto)
      return await this.itemService.create(createItemDto);
      
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Atualizar um item' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async update(
      @Param('id') id: number,
      @Body() updateItemDto: UpdateItemDto,
    ): Promise<any> {
      return this.itemService.update(id, updateItemDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Deletar um item' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async delete(@Param('id') id: number): Promise<void> {
      return this.itemService.delete(id);
    }
  }