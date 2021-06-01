import { HttpService, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { Repository } from 'typeorm';
import { ExternalContentDataSchema } from './models/external-content-data-schema';
import { externalContentEntity } from './models/external-content.entity';
import { ExternalContentInterface } from './models/external-content.interface';
import { resolveEndpointRESTAPI } from './utils/resolveEndpointRESTAPI';

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
        const externalContent = this.findOne(id);

        return new Observable(observable => {
            externalContent
            .pipe(
                concatMap(
                    (result) => {
                        const newEndpoint = resolveEndpointRESTAPI(result?.external_content_schema?.endpoint, result?.external_content_schema?.params);
                     
                        if(result?.external_content_type?.name === 'api_graphql') {
                            return this.httpService.post(newEndpoint, result?.external_content_schema?.params)
                        }
                        return this.httpService.get(newEndpoint);
                    }
                )
            )
            .subscribe((res) => {
                observable.next(res.data)
                observable.complete()
            }, err => {
                observable.error(err)
            });
        });

    }

    findOne(id: number): Observable<any> {
        return from(this.externalContentEntityRepository.findOne({id}, { relations: ["external_content_type"] }));
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
