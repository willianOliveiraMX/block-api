import { domains } from "src/domains/models/domains.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class pages {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    route_name: string;

    @Column("simple-json")
    page_config_components_schema:  {
        name: string,
        content: string
    };

    @ManyToOne(type => domains, domain => domain.id, { nullable: false })
    domains: domains

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_at: string;
}