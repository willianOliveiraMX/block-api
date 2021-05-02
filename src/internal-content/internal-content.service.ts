import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InternalContent } from './models/internal-content.interface'
import { internalContentEntity } from './models/internal-content.entity';
import { from, Observable } from 'rxjs';

@Injectable()
export class InternalContentService {
    constructor(
        @InjectRepository(internalContentEntity) private readonly internalContentRepository: Repository<InternalContent>
    ){}

    create(internalContentEntity: InternalContent): Observable<InternalContent> {
        return from(this.internalContentRepository.save(internalContentEntity))
    }

    findOne(id: number): Observable<any> {
        return from(this.internalContentRepository.findOne({id}));
    }

    findAll(): Observable<InternalContent[]> {
        return from(this.internalContentRepository.find());
    }

    deleteOne(id: number): Observable<any> {
        return from(this.internalContentRepository.delete(id));
    }

    updateOne(id: number, internalContentEntity: InternalContent): Observable<any> {
        return from(this.internalContentRepository.update(id, internalContentEntity));
    }
}
