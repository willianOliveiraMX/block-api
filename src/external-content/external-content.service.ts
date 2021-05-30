import { HttpService, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable, of, concat, observable } from 'rxjs';
import { mergeMap, concatMap } from 'rxjs/operators';

import { Repository } from 'typeorm';
import { ExternalContentDataSchema } from './models/external-content-data-schema';
import { externalContentEntity } from './models/external-content.entity';
import { ExternalContentInterface } from './models/external-content.interface';

@Injectable()
export class ExternalContentService {
    constructor(
        @InjectRepository(externalContentEntity) private readonly externalContentEntityRepository: Repository<ExternalContentInterface>,
        private httpService: HttpService
    ){}

    create(external: ExternalContentInterface): Observable<ExternalContentInterface> {
        return from(this.externalContentEntityRepository.save(external))
    }

    getExternalContent(id: number): Observable<any>{
        console.log(id);
        const externalContent = this.findOne(id);

        return new Observable(observable => {
            externalContent
            .pipe(
                concatMap(
                    (result) => {
                        observable.next(result);
                        return this.httpService.get(`${result?.external_content_schema?.endpoint}?api-key=${result?.external_content_schema?.api_key}`);
                    }
                )
            )
            .subscribe((res) => {
                observable.next(res.data)
                observable.complete()
            }, err => observable.error(err));
        });

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
