import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ComponentTypesService } from './component-types.service';
import { ComponentTypesInterface } from './models/componentTypes.interface';

@Controller('component-types')
export class ComponentTypesController {
    constructor(private componentTypesService: ComponentTypesService) {}

    @Post()
    create(@Body() componentTypes: ComponentTypesInterface): Observable<ComponentTypesInterface> {
        return this.componentTypesService.create(componentTypes);
    }

    @Get(':id')
    findOne(@Param() params): Observable<ComponentTypesInterface> {
        return this.componentTypesService.findOne(params.id)
    }

    @Get()
    findAll(): Observable<ComponentTypesInterface[]> {
        return this.componentTypesService.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id')id: string): Observable<ComponentTypesInterface> {
        return this.componentTypesService.deleteOne(Number(id))
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() componentTypes: ComponentTypesInterface): Observable<any> {
        return this.componentTypesService.updateOne(Number(id), componentTypes)
    }
}
