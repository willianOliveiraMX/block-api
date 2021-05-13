import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { permissions } from './models/permissions.entity';
import { Permissions } from './models/permissions.interface';

@Injectable()
export class PermissionsService {
    
    constructor(
        @InjectRepository(permissions) private readonly permissionsRepository: Repository<Permissions>
    ){}

    create(permissions: Permissions): Observable<Permissions> {
        return from(this.permissionsRepository.save(permissions));
    }

    findOne(id: number): Observable<any> {
        return from(this.permissionsRepository.findOne({id}) );
    }

    findAll(): Observable<Permissions[]> {
        return from(this.permissionsRepository.find());
    }

    deleteOne(id: number): Observable<any> {
        return from(this.permissionsRepository.delete(id));
    }

    updateOne(id: number, permissions: Permissions): Observable<any> {
        return from(this.permissionsRepository.update(id, permissions));
    }
}
