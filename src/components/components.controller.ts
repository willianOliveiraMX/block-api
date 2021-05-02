import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ComponentsService } from './components.service';
import { ComponentInterface } from './models/components.interface';

@Controller('components')
export class ComponentsController {
    constructor(private componentsService: ComponentsService){}

    @Post()
    create(@Body() componentInterface: ComponentInterface): Observable<ComponentInterface> {
        return this.componentsService.create(componentInterface);
    }

    @Get(':id')
    findOne(@Param() params): Observable<ComponentInterface> {
        return this.componentsService.findOne(params.id)
    }

    @Get()
    findAll(): Observable<ComponentInterface[]> {
        return this.componentsService.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id')id: string): Observable<ComponentInterface> {
        return this.componentsService.deleteOne(Number(id))
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() component: ComponentInterface): Observable<any> {
        return this.componentsService.updateOne(Number(id), component)
    }
}
