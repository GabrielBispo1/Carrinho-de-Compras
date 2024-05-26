import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateFreteDto, UpdateFreteDto } from '../dto/frete.dto';
import { FreteService } from '../service/frete.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('frete')
@ApiTags('produto')
export class FreteController {
  constructor(private readonly freteService: FreteService) {}

  @Get()
  @ApiOperation({ summary: 'Selecionar todos os fretes' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async findAll(): Promise<any[]> {
    return this.freteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Selecionar um frete' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async findOne(@Param('id') id: number): Promise<any> {
    return this.freteService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar um novo frete' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async create(@Body() createFreteDto: CreateFreteDto): Promise<any> {
    return this.freteService.create(createFreteDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um frete' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async update(
    @Param('id') id: number,
    @Body() updateFreteDto: UpdateFreteDto,
  ): Promise<any> {
    return this.freteService.update(id, updateFreteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um frete' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async delete(@Param('id') id: number): Promise<void> {
    return this.freteService.delete(id);
  }
}
