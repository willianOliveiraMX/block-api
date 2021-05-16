import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ExternalContentTypeService } from './external-content-type.service';
import { ExternalContentTypeInterface } from './models/external_content_type.interface';

@Controller('external-content-type')
export class ExternalContentTypeController {
    constructor(private externalContentTypeService: ExternalContentTypeService) {}

    @Post()
    create(@Body() external: ExternalContentTypeInterface): Observable<ExternalContentTypeInterface> {
        return this.externalContentTypeService.create(external);
    }

    @Get(':id')
    findOne(@Param() params): Observable<ExternalContentTypeInterface> {
        return this.externalContentTypeService.findOne(params.id)
    }

    @Get()
    findAll(): Observable<ExternalContentTypeInterface[]> {
        return this.externalContentTypeService.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id')id: string): Observable<ExternalContentTypeInterface> {
        return this.externalContentTypeService.deleteOne(Number(id))
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() external: ExternalContentTypeInterface): Observable<any> {
        return this.externalContentTypeService.updateOne(Number(id), external)
    }
}
