import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { compare } from 'bcryptjs';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ){}

    async validateUser(email: string, password: string): Promise<any>{
        const user = await this.userService.findOne({ email });
        console.log(user);
        if(user && await compare(password, user.password)){
            return user;
        }
        return null;
    }

    async login(user: User){
        const { id, ...rest } = user;
        const payload = { sub: id };
        return {
            ...rest,
            accessToken: this.jwtService.sign(payload)
        }
    }
}
