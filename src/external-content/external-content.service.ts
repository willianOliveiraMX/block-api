import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { externalContentEntity } from './models/external-content.entity';
import { ExternalContentInterface } from './models/external-content.interface';

@Injectable()
export class ExternalContentService {
    constructor(
        @InjectRepository(externalContentEntity) private readonly externalContentEntityRepository: Repository<ExternalContentInterface>
    ){}

    create(external: ExternalContentInterface): Observable<ExternalContentInterface> {
        return from(this.externalContentEntityRepository.save(external))
    }

    findOne(id: number): Observable<any> {
        return from(this.externalContentEntityRepository.findOne({id}));
    }

    findAll(): Observable<ExternalContentInterface[]> {
        return from(this.externalContentEntityRepository.find());
    }

    deleteOne(id: number): Observable<any> {
        return from(this.externalContentEntityRepository.delete(id));
    }

    updateOne(id: number, external: ExternalContentInterface): Observable<any> {
        return from(this.externalContentEntityRepository.update(id, external));
    }
}
