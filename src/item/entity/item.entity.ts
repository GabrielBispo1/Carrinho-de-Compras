export class ItemEntity {}

import { Produto } from 'src/produto/entity/produto.entity';
import { Ticket } from 'src/ticket/entity/ticket.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';

@Entity('item')
export class Item {
    @PrimaryColumn()
    ticketIdTicket: number;

    @PrimaryColumn()
    produtoIdProduto: number;

    @Column({  type: 'decimal', precision: 7, scale: 2 })
    valor: number;

    @Column({precision: 2 })
    qtdItem: number;

    @ManyToOne(() => Produto, (produto) => produto.item)
    produto: Produto[];
    
    @ManyToOne(() => Ticket, (ticket) => ticket.item)
    ticket: Ticket;
}
