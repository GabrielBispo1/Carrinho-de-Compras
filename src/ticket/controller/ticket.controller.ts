import {
    Body,
    Controller,
    Delete,
    Get,
    Post,
    Param,
    Put,
  } from '@nestjs/common';
  import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
  import { CreateTicketDto, UpdateTicketDto } from '../dto/ticket.dto';
  import { TicketService } from '../service/ticket.service';
  
  @Controller('ticket')
  @ApiTags('ticket')
  export class TicketController {
    constructor(private readonly ticketService: TicketService) {}
    @Get()
    @ApiOperation({ summary: 'Selecionar todos os tickets' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findAll(): Promise<any[]> {
      return this.ticketService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Selecionar um ticket' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findOne(@Param('id') id: number): Promise<any> {
      return this.ticketService.findOne(id);
    }
  
    @Post()
    @ApiOperation({ summary: 'Criar um ticket' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createTicketDto: CreateTicketDto): Promise<any> {
      return this.ticketService.create(createTicketDto);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Atualizar um ticket' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async update(
      @Param('id') id: number,
      @Body() updateTicketDto: UpdateTicketDto,
    ): Promise<any> {
      return this.ticketService.update(id, updateTicketDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Deletar um ticket' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async delete(@Param('id') id: number): Promise<void> {
      return this.ticketService.delete(id);
    }
  }
  