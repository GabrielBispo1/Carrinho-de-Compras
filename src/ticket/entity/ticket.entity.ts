// export class TicketEntity {}
import { Item } from 'src/item/entity/item.entity';
import { Login } from 'src/login/entity/login.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('Ticket') // com letra maíuscula para o POST funcionar
export class Ticket {
  @PrimaryGeneratedColumn()
  id_ticket: number;
  id_login: number;

  @Column({type: 'decimal', precision: 8, scale: 2 })
  total: number;

  @Column({ default: 10 })
  frete: number;

  //?
  @Column({ length: 16 })
  cartao_credito: string;

  @Column({ length: 19 })
  cartao_debito: string;

  @Column({ length: 48 })
  boleto: string;

  @Column({ length: 40 })
  endereco: string;

  @Column({ length: 9 })
  CEP_remetente: string;

  @ManyToOne(() => Login, (login) => login.ticket)
  login: Login[];

  @OneToMany(() => Item, (item) => item.ticket)
  item: Item[];
}
