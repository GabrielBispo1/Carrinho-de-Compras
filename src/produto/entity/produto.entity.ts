import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Produto')
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
}
