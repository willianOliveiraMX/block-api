import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { componentTypesEntity } from './models/componentTypes.entity';
import { ComponentTypesInterface } from './models/componentTypes.interface';

@Injectable()
export class ComponentTypesService {
    constructor(
        @InjectRepository(componentTypesEntity) private readonly componentTypesRepository: Repository<ComponentTypesInterface>
    ){}

    create(componentTypes: ComponentTypesInterface): Observable<ComponentTypesInterface> {
        return from(this.componentTypesRepository.save(componentTypes))
    }

    findOne(id: number): Observable<any> {
        return from(this.componentTypesRepository.findOne({id}));
    }

    findAll(): Observable<ComponentTypesInterface[]> {
        return from(this.componentTypesRepository.find());
    }

    deleteOne(id: number): Observable<any> {
        return from(this.componentTypesRepository.delete(id));
    }

    updateOne(id: number, componentTypes: ComponentTypesInterface): Observable<any> {
        return from(this.componentTypesRepository.update(id, componentTypes));
    }
}
