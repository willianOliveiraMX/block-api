import { users } from "src/user/models/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { pages } from '../../pages/models/pages.entity';

@Entity('internal_content')
export class internalContentEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string

    @Column("simple-json")
    fields: {
        name: string,
        content: string
    };

    @Column()
    text: string

    @Column({type: "boolean", default: true})
    is_active: boolean

    @Column("simple-json")
    content_meta: {
        name: string,
        content: string
    }

    @ManyToOne(type => users, user => user.id, {nullable: false})
    user_owner: users

    @ManyToOne(type => pages, page => page.id, { nullable: false })
    page: pages

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_at: string;
}