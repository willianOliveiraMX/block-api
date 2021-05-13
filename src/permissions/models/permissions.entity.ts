import { users } from "src/user/models/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class permissions {

    @PrimaryGeneratedColumn('increment')
    id: number;

    // @ManyToMany(type => users, users => users.permissions, { cascade: true })
    // @JoinTable({
    //     name: 'permissions_user',
    //     joinColumn: {
    //         name: 'permissions_id', 
    //         referencedColumnName: 'id'
    //     },
    //     inverseJoinColumn: {
    //         name: 'user_id',
    //         referencedColumnName: 'id'
    //     }
    // })
    // users: number;

    // @ManyToMany(() => users, (user: users) => user.permissions)
    // public users: users[];

    @Column()   
    name: string;

    @Column()
    module_reference: string;

    @Column({default: false})
    read: boolean;

    @Column({default: false})
    update: boolean;

    @Column({default: false})
    delete: boolean;

    @Column({default: false})
    create: boolean;
}
