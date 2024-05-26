import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from '../entity/produto.entity';
import { CreateProdutoDto, UpdateProdutoDto } from '../dto/produto.dto';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find();
  }

  async findOne(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: { id_produto: id },
    });

    if (!produto) {
      throw new HttpException(`Produto não encontrado.`, HttpStatus.NOT_FOUND);
    }
    return produto;
  }

  async create(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    try {
      return await this.produtoRepository.save(
        this.produtoRepository.create(createProdutoDto),
      );
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new HttpException('Produto já existe.', HttpStatus.BAD_REQUEST);
      } else {
        throw new HttpException(
          'Erro ao criar o registro. Tente novamente mais tarde.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto): Promise<void> {
    const result = await this.produtoRepository.update(id, updateProdutoDto);
    if (result.affected === 0) {
      throw new HttpException(`Produto não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: number): Promise<void> {
    const result = await this.produtoRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException(`Produto não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }
}
