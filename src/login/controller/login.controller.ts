import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
  import { CreateLoginDto, UpdateLoginDto } from '../dto/login.dto';
  import { LoginService } from '../service/login.service';
  
  @Controller('login')
  @ApiTags('login')
  export class LoginController {
    constructor(private readonly loginService: LoginService) {}
    @Get()
    @ApiOperation({ summary: 'Selecionar todos os usuários registrados' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findAll(): Promise<any[]> {
      return this.loginService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Selecionar um usuário registrado' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findOne(@Param('id') id: number): Promise<any> {
      return this.loginService.findOne(id);
    }
  
    @Post()
    @ApiOperation({ summary: 'Registrar um usuário' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createLoginDto: CreateLoginDto): Promise<any> {
      return this.loginService.create(createLoginDto);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Atualizar um usuário registrado' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async update(
      @Param('id') id: number,
      @Body() updateLoginDto: UpdateLoginDto,
    ): Promise<any> {
      return this.loginService.update(id, updateLoginDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Deletar um registro de usuário' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async delete(@Param('id') id: number): Promise<void> {
      return this.loginService.delete(id);
    }
  }