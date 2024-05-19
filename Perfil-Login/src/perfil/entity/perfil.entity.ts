export class PerfilEntity { }
import { Login } from 'src/login/entity/login.entity';
import { Entity, PrimaryGeneratedColumn, Column,  ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('Perfil')
export class Perfil {

    @PrimaryGeneratedColumn()
    id_endereco: number;

    @Column({ length: 40 })
    nome: string;

    @Column({ length: 1 })
    dadosPessoais: string;

    @Column({ length: 40 })
    endereco: string;

    @Column({ length: 40 })
    cidade: string;

    @Column({ length: 2 })
    estado: string;

    @Column({ length: 40 })
    bairro: string;

    @Column({ length: 4 })
    numero: string;

    @Column({ length: 9 })
    cep: string;

    @Column({ length: 14 })
    cpf: string;

    @Column({ length: 12 })
    rg: string;

    @Column({ length: 12 })
    telefone: string;


    @ManyToOne(() => Login, login => login.perfis)
    login: Login[];
}

