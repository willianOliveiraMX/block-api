import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
   
    constructor(private userService: UserService) {}

    @Post()
    create(@Body() user: UserDto): UserDto {
        return this.userService.create(user);
    }

    @Get()
    findAll(): UserDto[]{
        return this.userService.findAll();
    }
}
