import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Domains } from '../models/domains.interface';
import { DomainsService } from '../service/domains.service';

@Controller('domains')
export class DomainsController {
    constructor(private domainsService: DomainsService) {}

    @Post()
    create(@Body() domains: Domains): Observable<Domains> {
        return this.domainsService.create(domains);
    }

    @Get(':id')
    findOne(@Param() params): Observable<Domains> {
        return this.domainsService.findOne(params.id)
    }

    @Get()
    findAll(): Observable<Domains[]> {
        return this.domainsService.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id')id: string): Observable<Domains> {
        return this.domainsService.deleteOne(Number(id))
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() user: Domains): Observable<any> {
        return this.domainsService.updateOne(Number(id), user)
    }
}
