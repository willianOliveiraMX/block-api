import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { InternalContent } from './models/internal-content.interface';
import { InternalContentService } from './internal-content.service';

@Controller('internal-content')
export class InternalContentController {
    constructor(private internalContentService: InternalContentService){}

    @Post()
    create(@Body() internalContent: InternalContent): Observable<InternalContent> {
        return this.internalContentService.create(internalContent);
    }

    @Get(':id')
    findOne(@Param() params): Observable<InternalContent> {
        return this.internalContentService.findOne(params.id)
    }

    @Get()
    findAll(): Observable<InternalContent[]> {
        return this.internalContentService.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id')id: string): Observable<InternalContent> {
        return this.internalContentService.deleteOne(Number(id))
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() user: InternalContent): Observable<any> {
        return this.internalContentService.updateOne(Number(id), user)
    }
}
