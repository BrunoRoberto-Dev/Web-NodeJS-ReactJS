import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Alunos{
    @PrimaryGeneratedColumn() // id
    id: number;

    @Column() // nome
    nome: string;

    @Column() // RA
    RA: string;

    @Column({ // Cadastrado S/N
        default: true
    })
    cadastrado: boolean;

    @Column() // Data de nascimento
    data_nasc: Date;

    @Column() // Idade
    idade: number;

    @Column() // Endereço
    endereco: string;

}