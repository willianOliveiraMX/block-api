import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { externalContentTypeEntity } from './models/external_content_type.entity';
import { Repository } from 'typeorm';
import { ExternalContentTypeInterface } from './models/external_content_type.interface';

@Injectable()
export class ExternalContentTypeService {
    constructor(
        @InjectRepository(externalContentTypeEntity) private readonly externalContentTypeEntityRepository: Repository<ExternalContentTypeInterface>
    ){}

    create(external: ExternalContentTypeInterface): Observable<ExternalContentTypeInterface> {
        return from(this.externalContentTypeEntityRepository.save(external))
    }

    findOne(id: number): Observable<any> {
        return from(this.externalContentTypeEntityRepository.findOne({id}));
    }

    findAll(): Observable<ExternalContentTypeInterface[]> {
        return from(this.externalContentTypeEntityRepository.find());
    }

    deleteOne(id: number): Observable<any> {
        return from(this.externalContentTypeEntityRepository.delete(id));
    }

    updateOne(id: number, externalType: ExternalContentTypeInterface): Observable<any> {
        return from(this.externalContentTypeEntityRepository.update(id, externalType));
    }
}
