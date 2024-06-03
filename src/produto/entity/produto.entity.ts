import { Item } from 'src/item/entity/item.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('produto')
export class Produto {
  @PrimaryGeneratedColumn()
  id_produto: number;

  @Column({ length: 40 })
  nome: string;

  @Column({ type: 'decimal', precision: 7, scale: 2 })
  valor: number;

  @Column()
  qtdProduto: number;

  @Column({ length: 100 })
  descricao: string;

  @OneToMany(() => Item, (item) => item.produto)
  item: Item[];
}
