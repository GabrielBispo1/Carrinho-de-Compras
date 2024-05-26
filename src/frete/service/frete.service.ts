import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Frete } from '../entity/frete.entity';
import { CreateFreteDto, UpdateFreteDto } from '../dto/frete.dto';

@Injectable()
export class FreteService {
  constructor(
    @InjectRepository(Frete)
    private freteRepository: Repository<Frete>,
  ) {}

  async findAll(): Promise<Frete[]> {
    return await this.freteRepository.find({ relations: ['ticket', 'perfil'] });
  }

  async findOne(id: number): Promise<Frete> {
    const frete = await this.freteRepository.findOne({
      where: { id_ticket: id },
      relations: ['fretes'],
    });

    if (!frete) {
      throw new HttpException(`Frete não encontrado.`, HttpStatus.NOT_FOUND);
    }
    return frete;
  }

  async create(createFreteDto: CreateFreteDto): Promise<Frete> {
    try {
      return await this.freteRepository.save(
        this.freteRepository.create(createFreteDto),
      );
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new HttpException('Frete já registrado.', HttpStatus.BAD_REQUEST);
      } else {
        throw new HttpException(
          'Erro ao criar o registro. Tente novamente mais tarde.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async update(id: number, updateFreteDto: UpdateFreteDto): Promise<void> {
    const result = await this.freteRepository.update(id, updateFreteDto);
    if (result.affected === 0) {
      throw new HttpException(`Frete não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: number): Promise<void> {
    const result = await this.freteRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException(`Frete não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }
}
