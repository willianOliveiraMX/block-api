import { componentTypesEntity } from "src/component-types/models/componentTypes.entity";
import { users } from "src/user/models/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class componentEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string;

    @ManyToOne(() => componentTypesEntity, componentTypesEntity => componentTypesEntity.id, {nullable: false})
    type: componentEntity;

    @ManyToOne(() => users, user => user.id, {nullable: false})
    user_owner: users;

    @Column('simple-json')
    data_schema:  {
        name: string,
        content: string
    };

    @Column({ type: "boolean", default: true})
    is_active: boolean;

    @Column({ type: "boolean", default: true})
    is_public: boolean;

    @Column('simple-json')
    analitics_source: {
        name: string,
        content: string 
    };

    @Column('simple-json')
    config_schema: {
        name: string,
        content: string 
    };

    @Column({ type: "boolean", default: true })
    is_free: boolean;
    
    @Column()
    rent_price: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_at: string;
}