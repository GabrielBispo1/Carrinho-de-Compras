export class LoginEntity {}
import { Perfil } from 'src/perfil/entity/perfil.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';

@Entity('Login')
export class Login {
    @PrimaryGeneratedColumn()
    id_login: number;

    @Column({ unique: true, length: 40 }) 
    email: string;

    @Column({ length: 40 })
    senha: string;


    @OneToMany (() => Perfil, perfil => perfil.login)
    perfis: Perfil[]
}
