import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dtos/create.dto';
import { EditPostDto } from './dtos/update.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private readonly postService: PostsService) {}

    @Get()
    async getMany() {
        return this.postService.getMany();
    }

    @Get(':id')
    async getOne(@Param('id') id: string){
        return this.getOne(id);
    }

    @Post()
    async createOne(
        @Body() dto: CreatePostDto
    ){
        return this.postService.createOne(dto);
    }

    @Put()
    async updateOne(
        @Body() dto: EditPostDto
    ){
        return this.postService.updateOne(dto);
    }

    @Delete()
    async deleteOne(){
        return this.postService.deleteOne();
    }
}
