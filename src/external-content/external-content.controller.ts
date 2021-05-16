import { Param } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ExternalContentService } from './external-content.service';
import { ExternalContentInterface } from './models/external-content.interface';

@Controller('external-content')
export class ExternalContentController {
    constructor(private externalService: ExternalContentService) {}

    @Post()
    create(@Body() external: ExternalContentInterface): Observable<ExternalContentInterface> {
        return this.externalService.create(external);
    }

    @Get(':id')
    findOne(@Param() params): Observable<ExternalContentInterface> {
        return this.externalService.findOne(params.id)
    }

    @Get()
    findAll(): Observable<ExternalContentInterface[]> {
        return this.externalService.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id')id: string): Observable<ExternalContentInterface> {
        return this.externalService.deleteOne(Number(id))
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() external: ExternalContentInterface): Observable<any> {
        return this.externalService.updateOne(Number(id), external)
    }
}
