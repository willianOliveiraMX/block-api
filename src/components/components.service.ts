import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { componentEntity } from './models/components.entity';
import { ComponentInterface } from './models/components.interface';

@Injectable()
export class ComponentsService {
    constructor(
        @InjectRepository(componentEntity) private readonly componentRepository: Repository<ComponentInterface>
    ){}

    create(componentEntity: ComponentInterface): Observable<ComponentInterface> {
        return from(this.componentRepository.save(componentEntity))
    }

    findOne(id: number): Observable<any> {
        return from(this.componentRepository.findOne({id}));
    }

    findAll(): Observable<ComponentInterface[]> {
        return from(this.componentRepository.find());
    }

    deleteOne(id: number): Observable<any> {
        return from(this.componentRepository.delete(id));
    }

    updateOne(id: number, internalContentEntity: ComponentInterface): Observable<any> {
        return from(this.componentRepository.update(id, internalContentEntity));
    }
}
