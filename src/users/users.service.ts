import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { EditUserDto } from './dtos/edit-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async getMany(){
        return await this.userRepository.find();
    }

    async getOne(id: number){
        const user = await this.userRepository.findOne(id);
        if(!user) throw new NotFoundException('User does not exists or unauthorized');
        return user;
    }

    async createOne(dto: CreateUserDto){
        const userExist = await this.userRepository.findOne({ email: dto.email });
        if (userExist) throw new BadRequestException('User already registered with email');
        const newUser = this.userRepository.create(dto);
        const user =  await this.userRepository.save(newUser);
        delete user.password;
        return user;
    }

    async editOne(id: number, dto: EditUserDto){
        const user = await this.getOne(id);
        const editedUser = Object.assign(user, dto);
        return await this.userRepository.save(editedUser);
    }

    async deleteOne(id: number){
        const user = await this.getOne(id);
        return await this.userRepository.remove(user);
    }

    async findOne(email: string){
        return await this.userRepository
            .createQueryBuilder('user')
            .where({ email })
            .addSelect('user.password')
            .getOne();
    }
}
