import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dtos/create.dto';
import { EditPostDto } from './dtos/update.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private readonly postService: PostsService) {}

    @Get()
    async getMany() {
        const data = await this.postService.getMany();
        return {
            message: 'success',
            count: data.length,
            data: data
        }
    }

    @Get(':id')
    async getOne(@Param('id') id: number){
        return await this.getOne(id);
    }

    @Post()
    async createOne(
        @Body() dto: CreatePostDto
    ){
        return this.postService.createOne(dto);
    }

    @Put(':id')
    async updateOne(
        @Param('id') id: number,
        @Body() dto: EditPostDto
    ){
        return this.postService.updateOne(id, dto);
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number){
        return this.postService.deleteOne(id);
    }
}
