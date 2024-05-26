export class ItemEntity {}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('item')
export class Item {
    @PrimaryGeneratedColumn()
    id_ticket: number;
    id_produto: number;

    @Column({  type: 'decimal', precision: 7, scale: 2 })
    valor: number;

    @Column({precision: 2 })
    qtdItem: number;

    @ManytoOne(() => Produto, (produto) => produto.itens)
    produto: Produto[];
    
    @ManyToOne(() => Ticket, (ticket) => ticket.itens)
    ticket: Ticket[];
}