import { Param } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PagesInterface } from '../models/pages.interface';
import { PagesService } from '../service/pages.service';

@Controller('pages')
export class PagesController {
    constructor(private pagesService: PagesService) {}

    @Post()
    create(@Body() pages: PagesInterface): Observable<PagesInterface> {
        return this.pagesService.create(pages);
    }

    @Get(':id')
    findOne(@Param() params): Observable<PagesInterface> {
        return this.pagesService.findOne(params.id)
    }

    @Get()
    findAll(): Observable<PagesInterface[]> {
        return this.pagesService.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id')id: string): Observable<PagesInterface> {
        return this.pagesService.deleteOne(Number(id))
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() user: PagesInterface): Observable<any> {
        return this.pagesService.updateOne(Number(id), user)
    }
}
