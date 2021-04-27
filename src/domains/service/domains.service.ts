import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { domains } from '../models/domains.entity';
import { Domains } from '../models/domains.interface';

@Injectable()
export class DomainsService {

    constructor(
        @InjectRepository(domains) private readonly domainsRepository: Repository<Domains>
    ){}

    create(domains: Domains): Observable<Domains> {
        return from(this.domainsRepository.save(domains))
    }

    findOne(id: number): Observable<any> {
        return from(this.domainsRepository.findOne({id}));
    }

    findAll(): Observable<Domains[]> {
        return from(this.domainsRepository.find());
    }

    deleteOne(id: number): Observable<any> {
        return from(this.domainsRepository.delete(id));
    }

    updateOne(id: number, domains: Domains): Observable<any> {
        return from(this.domainsRepository.update(id, domains));
    }
}
