import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class users {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    fullName: string;

    @Column({unique: true})
    displayName: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    isActive: boolean;
}