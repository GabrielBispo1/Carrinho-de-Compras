import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Perfil } from '../entity/perfil.entity';
import { CreatePerfilDto, UpdatePerfilDto } from '../dto/perfil.dto';

@Injectable()
export class PerfilService {
  constructor(
    @InjectRepository(Perfil)
    private perfilRepository: Repository<Perfil>,
  ) {}

  async findAll(): Promise<Perfil[]> {
    return await this.perfilRepository.find({ relations: ['perfis'] });
  }

  async findOne(id: number): Promise<Perfil> {
    const perfil = await this.perfilRepository.findOne({
      where: { id_login: id },
      relations: ['perfis'],
    });

    if (!perfil) {
      throw new HttpException(`Perfil não encontrado.`, HttpStatus.NOT_FOUND);
    }
    return perfil;
  }

  async create(createPerfilDto: CreatePerfilDto): Promise<Perfil> {
    try {
        return await this.perfilRepository.save(
            this.perfilRepository.create(createPerfilDto),
      );
    } catch (error:any) {
      if (error.code === 'ER_DUP_ENTRY') {  //error.code, dando erro
        throw new HttpException('Endereço já registrado.', HttpStatus.BAD_REQUEST);
      } else {
        throw new HttpException(
          'Erro ao criar o registro. Tente novamente mais tarde.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async update(id: number, updatePerfilDto: UpdatePerfilDto): Promise<void> {
    const result = await this.perfilRepository.update(id, updatePerfilDto);
    if (result.affected === 0) {
      throw new HttpException(`Perfil não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: number): Promise<void> {
    const result = await this.perfilRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException(`Perfil não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }
}
