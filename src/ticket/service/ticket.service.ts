//?
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from '../entity/ticket.entity';
import { CreateTicketDto, UpdateTicketDto} from '../dto/ticket.dto'

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
  ) {}

  async findAll(): Promise<Ticket[]> {
    return await this.ticketRepository.find({ relations: ['tickets'] });
  }

  async findOne(id: number): Promise<Ticket> {
    const user = await this.ticketRepository.findOne({
      where: { id_ticket: id },
    });

    if (!Ticket) {
      throw new HttpException(`Ticket não encontrado.`, HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    try {
      return await this.ticketRepository.save(
        this.ticketRepository.create(CreateTicketDto),
      );
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new HttpException('Ticket já existente.', HttpStatus.BAD_REQUEST);
      } else {
        throw new HttpException(
          'Erro ao criar o registro. Tente novamente mais tarde.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async update(id: number, updateTicketDto: UpdateTicketDto): Promise<void> {
    const result = await this.ticketRepository.update(id, updateTicketDto);
    if (result.affected === 0) {
      throw new HttpException(`Ticket não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: number): Promise<void> {
    const result = await this.ticketRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException(`Ticket não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }
}