import { users } from "../../user/models/user.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { permissions } from "./permissions.entity";

@Entity()
export class permissionsUser {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(type => users, user => user.id, {nullable: false})
    user_owner: users; 

    @ManyToOne(type => permissions, permission => permission.id, {nullable: false})
    permission_id: permissions

}