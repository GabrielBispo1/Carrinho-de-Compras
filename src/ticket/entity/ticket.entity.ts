export class TicketEntity {}
import { Frete } from 'src/frete/entity/frete.entity';
import { Item } from 'src/item/entity/item.entity';
import { Login } from 'src/login/entity/login.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  OneToMany,
} from 'typeorm';

@Entity('Ticket')
export class Ticket {
  @PrimaryGeneratedColumn()
  id_ticket: number;

  @Column()
  id_login: number;

  @Column()
  total: number;

  @ManyToOne(() => Login, (login) => login.ticket)
  login: Login[];

  @OneToOne(() => Frete, (frete) => frete.ticket)
  frete: Frete[];

  @OneToMany(() => Item, (item) => item.ticket)
  item: Item[];
}
