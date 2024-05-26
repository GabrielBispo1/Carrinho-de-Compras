import { Perfil } from 'src/perfil/entity/perfil.entity';
import { Ticket } from 'src/ticket/entity/ticket.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from 'typeorm';

@Entity('frete')
export class Frete {
  @PrimaryGeneratedColumn()
  id_ticket: number;

  @Column()
  id_endereco: number;

  @Column({ type: 'decimal', precision: 7, scale: 2 })
  valor: number;

  @Column({ length: 9 })
  CEP_remetente: string;

  @OneToOne(() => Ticket, (ticket) => ticket.frete)
  ticket: Ticket[];

  @OneToMany(() => Perfil, (perfil) => perfil.frete)
  perfis: Perfil[];
}
