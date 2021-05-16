import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('external_content_types')
export class externalContentTypeEntity {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string;

    @Column()
    description: string;

    @Column('simple-json')
    config_schema:  {
        name: string,
        description: string,
        api_key: string,
        api_secret: string
    };

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_at: string;

}