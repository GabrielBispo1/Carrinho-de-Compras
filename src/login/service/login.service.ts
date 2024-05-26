import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Login } from '../entity/login.entity';
import { CreateLoginDto, UpdateLoginDto } from '../dto/login.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login)
    private loginRepository: Repository<Login>,
  ) {}

  async findAll(): Promise<Login[]> {
    return await this.loginRepository.find({ relations: ['login'] });
  }

  async findOne(id: number): Promise<Login> {
    const login = await this.loginRepository.findOne({
      where: { id_login: id },
      relations: ['login'],
    });

    if (!login) {
      throw new HttpException(`Login não encontrado.`, HttpStatus.NOT_FOUND);
    }
    return login;
  }

  async create(createLoginDto: CreateLoginDto): Promise<Login> {
    try {
        const saltOrRounds = 10; // o custo do processamento, 10 é geralmente suficiente
        const hash = await bcrypt.hash(createLoginDto.senha, saltOrRounds);
        createLoginDto.senha = hash; // substitui a senha original pelo hash
        
        return await this.loginRepository.save(
            this.loginRepository.create(createLoginDto),
      );
    } catch (error:any) {
      if (error.code === 'ER_DUP_ENTRY') {  //error.code, dando erro
        throw new HttpException('Email já registrado.', HttpStatus.BAD_REQUEST);
      } else {
        throw new HttpException(
          'Erro ao criar o registro. Tente novamente mais tarde.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async update(id: number, updateLoginDto: UpdateLoginDto): Promise<void> {
    const result = await this.loginRepository.update(id, updateLoginDto);
    if (result.affected === 0) {
      throw new HttpException(`Login não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: number): Promise<void> {
    const result = await this.loginRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException(`Login não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }
}
