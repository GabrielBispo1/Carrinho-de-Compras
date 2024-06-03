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
  import { CreatePerfilDto, UpdatePerfilDto } from '../dto/perfil.dto';
  import { PerfilService } from '../service/perfil.service';
  
  @UseGuards(JwtAuthGuard)
  @Controller('perfil')
  @ApiTags('perfil')
  export class PerfilController {
    constructor(private readonly perfilService: PerfilService) {}
  
    @Get()
    @ApiOperation({ summary: 'Selecionar todos os perfis' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findAll(): Promise<any[]> {
      return this.perfilService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Selecionar um perfil' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findOne(@Param('id') id: number): Promise<any> {
      return this.perfilService.findOne(id);
    }
  
    @Post()
    @ApiOperation({ summary: 'Criar um perfil' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createPerfilDto: CreatePerfilDto): Promise<any> {
      return this.perfilService.create(createPerfilDto);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Atualizar um perfil' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async update(
      @Param('id') id: number,
      @Body() updatePerfilDto: UpdatePerfilDto,
    ): Promise<any> {
      return this.perfilService.update(id, updatePerfilDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Deletar um perfil' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async delete(@Param('id') id: number): Promise<void> {
      return this.perfilService.delete(id);
    }
  }
  
