import { permissions } from "../../permissions/models/permissions.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Permissions } from "src/permissions/models/permissions.interface";

@Entity()
export class users {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToMany(type => permissions, permissions => permissions.users, { cascade: true })
    @JoinTable({
        name: 'permissions_user',
        joinColumn: {
            name: 'user_id', 
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'permissions_id',
            referencedColumnName: 'id'
        }
    })
    permissions: Permissions[];

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

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_at: string;
}