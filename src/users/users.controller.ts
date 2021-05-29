import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { EditUserDto } from './dtos/edit-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    @Get()
    async getMany() {
        return await this.userService.getMany();
    }

    @Get(':id')
    async getOne(@Param('id') id: number){
        return await this.userService.getOne(id);
    }

    @Post()
    async createOne(
        @Body() dto: CreateUserDto
    ){
        const data = await this.userService.createOne(dto);
        return {
            message: 'User created',
            data
        }
    }

    @Put(':id')
    async updateOne(
        @Param('id') id: number,
        @Body() dto: EditUserDto
    ){
        const data = await this.userService.editOne(id, dto);
        return {
            message: 'User updated',
            data
        }
    }
    
    @Delete(':id')
    async deleteOne(
        @Param('id') id: number
    ){
        const data = await this.userService.deleteOne(id);
        return {
            message: 'User deleted',
            data
        }
    }
}
