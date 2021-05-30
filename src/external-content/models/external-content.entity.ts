import { externalContentTypeEntity } from "src/external-content-type/models/external_content_type.entity";
import { pages } from "src/pages/models/pages.entity";
import { users } from "src/user/models/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('external_content')
export class externalContentEntity {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    title: string;

    @ManyToOne(type => externalContentTypeEntity, externalContentTypeEntity => externalContentTypeEntity.id, {nullable: false})
    external_content_type: externalContentTypeEntity;

    @Column("simple-json")
    external_content_schema: {}

    @ManyToOne(type => users, user => user.id, {nullable: false})
    user_owner: users

    @ManyToOne(type => pages, page => page.id, { nullable: false })
    page: pages

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_at: string;
}
