import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from '../entity/item.entity';
import { CreateItemDto, UpdateItemDto } from '../dto/item.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find({ relations: ['produto', 'ticket'] }); //talvez criar um para cada, tanto produto e ticket
  }

  async findOne(id: number, id_ticket: number): Promise<Item> {
    const item = await this.itemRepository.findOne({
      where: { produtoIdProduto: id, ticketIdTicket: id_ticket }, //mesma coisa, para usar o id_produto e o id_ticket
      relations: ['produto'],
    });

    if (!item) {
      throw new HttpException(`Item não encontrado.`, HttpStatus.NOT_FOUND);
    }
    return item;
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    try {
      console.log('batatinha frita', createItemDto)
      const item = await this.itemRepository.create(createItemDto);
      console.log('frita', item)
      return await this.itemRepository.save(createItemDto);
    } catch (error: any) {
      if (error.code === 'ER_DUP_ENTRY') {  //problema do error.code resolvido, adicionado o :any no catch(error:any)
        throw new HttpException('Item já registrado.', HttpStatus.BAD_REQUEST);
      } else {
        throw new HttpException(
          'Erro ao criar o registro. Tente novamente mais tarde.' + error,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async update(id: number, updateItemDto: UpdateItemDto): Promise<void> {
    const result = await this.itemRepository.update(id, updateItemDto);
    if (result.affected === 0) {
      throw new HttpException(`Item não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: number): Promise<void> {
    const result = await this.itemRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException(`Item não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }
}
