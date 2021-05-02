import { pages } from "src/pages/models/pages.entity";
import { users } from "src/user/models/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class externalContentEntity {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    title: string;

    @Column('simple-json')
    config_schema:  {
        name: string,
        content: string
    };

    @Column()
    external_content_type_id: number;

    @ManyToOne(type => users, user => user.id, {nullable: false})
    user_owner: users

    @ManyToOne(type => pages, page => page.id, { nullable: false })
    page: pages

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_at: string;
}
