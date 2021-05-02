import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class componentTypesEntity {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({unique: true})
    type_name: string

    @Column('simple-json')
    type_schema: {
        name: string,
        content: string
    }

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_at: string;
}