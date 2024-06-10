import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBasicAuth, ApiBearerAuth, ApiHeader } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard.strategy';
import { CreateProdutoDto, UpdateProdutoDto } from '../dto/produto.dto';
import { ProdutoService } from '../service/produto.service';

@UseGuards(JwtAuthGuard)
@ApiHeader({
  name: 'Authorization',
  description: 'Token JWT de autorização pppppppp',
  required: true,
  example: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlQHRlc3RlLmNvbSIsInN1YiI6MSwiaWF0IjoxNzE4MDI2MDAzLCJleHAiOjE3MTgwMjk2MDN9.JF0TedYii_fvu4Hgn1N83sKYjK9tNKKJey2_3hmBBgc', // Adicione um exemplo de token JWT aqui
})
@ApiBearerAuth()
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
