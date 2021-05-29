import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dtos/create.dto';
import { EditPostDto } from './dtos/update.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>
    ) {}

    async getMany(): Promise<Post[]> {
        return await this.postRepository.find();
    }

    async getOne(id: number) {
        const post = await this.postRepository.findOne(id);
        if(!post) throw new NotFoundException('Post does not exist');
        return post;
    }

    async createOne(dto: CreatePostDto){
        const post = await this.postRepository.create(dto as any);
        return await this.postRepository.save(post);
    }

    async updateOne(id: number, dto: EditPostDto){
        const post = await this.postRepository.findOne(id);
        if(!post) throw new NotFoundException('Post does not exist');
        const edited = Object.assign(post, dto);
        return await this.postRepository.save(edited);
    }

    async deleteOne(id: number){
        return await this.postRepository.delete(id);
    }
}
