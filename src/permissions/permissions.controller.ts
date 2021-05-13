import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Permissions } from './models/permissions.interface';
import { PermissionsService } from './permissions.service';

@Controller('permissions')
export class PermissionsController {
    constructor(private permissionsService: PermissionsService) {}

    @Post()
    create(@Body() permissions: Permissions): Observable<Permissions> {
        return this.permissionsService.create(permissions);
    }

    @Get(':id')
    findOne(@Param() params): Observable<Permissions> {
        return this.permissionsService.findOne(params.id)
    }

    @Get()
    findAll(): Observable<Permissions[]> {
        return this.permissionsService.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id')id: string): Observable<Permissions> {
        return this.permissionsService.deleteOne(Number(id))
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() permissions: Permissions): Observable<any> {
        return this.permissionsService.updateOne(Number(id), permissions)
    }
}
