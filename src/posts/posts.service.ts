import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dtos/create.dto';
import { EditPostDto } from './dtos/update.dto';

@Injectable()
export class PostsService {

    async getMany() {
        return 'ok';
    }

    async getOne(id: string){
        return id;
    }

    async createOne(dto: CreatePostDto){
        return dto;
    }

    async updateOne(dto: EditPostDto){
        return dto;
    }

    async deleteOne(){
        return 'papu';
    }
}
