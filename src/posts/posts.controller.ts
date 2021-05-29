import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

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
        @Body('content') dto: any
    ){
        return {
            dto: dto
        }
    }

    @Put()
    async updateOne(){

    }

    @Delete()
    async deleteOne(){

    }
}
