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
import { CreateProdutoDto, UpdateProdutoDto } from '../dto/produto.dto';
import { ProdutoService } from '../service/produto.service';

@Controller('produto')
@ApiTags('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}
  @Get()
  @ApiOperation({ summary: 'Selecionar todos os produtos' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findAll(): Promise<any[]> {
    return this.produtoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Selecionar um produto' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findOne(@Param('id') id: number): Promise<any> {
    return this.produtoService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar um novo produto' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createProdutoDto: CreateProdutoDto): Promise<any> {
    return this.produtoService.create(createProdutoDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um produto' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async update(
    @Param('id') id: number,
    @Body() updateProdutoDto: UpdateProdutoDto,
  ): Promise<any> {
    return this.produtoService.update(id, updateProdutoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um produto' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async delete(@Param('id') id: number): Promise<void> {
    return this.produtoService.delete(id);
  }
}
