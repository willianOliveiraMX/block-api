import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { users } from '../models/user.entity';
import { User } from '../models/user.interface';
import * as bcrypt from 'bcrypt';
import { concatMap } from 'rxjs/operators';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(users) private readonly userRepository: Repository<users>
    ){}

    create(user: User): Observable<User> {
        const newPass = from(bcrypt.hash(user.password, 10));

        return new Observable(observable => {
            newPass
            .pipe(
                concatMap((resultPass) => {
                    const hashUser = {
                        ...user, 
                        password: resultPass
                    }
                    return from(this.userRepository.save(hashUser))
                })
            )
            .subscribe((res) => {
                observable.next(res)
                observable.complete()
            });
        });
    }

    findOne(id: number): Observable<any> {
        return from(this.userRepository.findOne({id}) );
    }

    findAll(): Observable<User[]> {
        console.log(process.env);
        return from(this.userRepository.find());
    }

    deleteOne(id: number): Observable<any> {
        return from(this.userRepository.delete(id));
    }

    updateOne(id: number, user: User): Observable<any> {
        const newPass = from(bcrypt.hash(user.password, 10));

        return new Observable(observable => {
            newPass
            .pipe(
                concatMap((resultPass) => {
                    const hashUser = {
                        ...user, 
                        password: resultPass
                    }
                    return from(this.userRepository.update(id, hashUser))
                })
            )
            .subscribe((res) => {
                observable.next(res)
                observable.complete()
            });
        });
    }
}
