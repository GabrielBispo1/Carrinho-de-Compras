export class LoginEntity {}
import { Perfil } from 'src/perfil/entity/perfil.entity';
import { Ticket } from 'src/ticket/entity/ticket.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany} from 'typeorm';

@Entity('login')
export class Login {
    @PrimaryGeneratedColumn()
    id_login: number;

    @Column({ unique: true, length: 40 }) 
    email: string;

    @Column({ length: 40 })
    senha: string;

    @OneToMany(() => Ticket, (ticket) => ticket.login)
    ticket: Ticket[];

    @OneToMany (() => Perfil, (perfil) => perfil.login)
    perfis: Perfil[]
}
