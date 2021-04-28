import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { pages } from '../models/pages.entity';
import { PagesInterface } from '../models/pages.interface';

@Injectable()
export class PagesService {
    constructor(
        @InjectRepository(pages) private readonly pagesRepository: Repository<PagesInterface>
    ){}

    create(pages: PagesInterface): Observable<PagesInterface> {
        return from(this.pagesRepository.save(pages))
    }

    findOne(id: number): Observable<any> {
        return from(this.pagesRepository.findOne({id}));
    }

    findAll(): Observable<PagesInterface[]> {
        return from(this.pagesRepository.find());
    }

    deleteOne(id: number): Observable<any> {
        return from(this.pagesRepository.delete(id));
    }

    updateOne(id: number, pages: PagesInterface): Observable<any> {
        return from(this.pagesRepository.update(id, pages));
    }
}
