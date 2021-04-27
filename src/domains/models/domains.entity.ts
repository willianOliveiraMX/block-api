import { users } from "src/user/models/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class domains {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({unique: true})
    domain_name: string;

    @Column("simple-json")
    domain_schema: {
        name: string,
        content: string
    };

    @Column({unique: true})
    site_url: string;

    @ManyToOne(type => users, user => user.id, { nullable: false })
    user: users

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_at: string;
}