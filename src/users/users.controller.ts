import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get('')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }

    @Post()
    create(@Body() createUserDto: User) {
        return this.usersService.create(createUserDto);
    }

    @Put('')
    update(@Param('id') id: string, @Body() updateUserDto: User) {
        return this.usersService.update(+id, updateUserDto);
    }

    @Delete('')
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id);
    }
}