import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dtos/create.dto';
import { EditPostDto } from './dtos/update.dto';

@Controller('posts')
export class PostsController {

    @Get()
    async getMany() {
        return 'ok';
    }

    @Get(':id')
    async getOne(@Param('id') id: string){
        return id;
    }

    @Post()
    async createOne(
        @Body() dto: CreatePostDto
    ){
        return dto;
        
    }

    @Put()
    async updateOne(
        @Body() dto: EditPostDto
    ){
        return dto;
    }

    @Delete()
    async deleteOne(){

    }
}
