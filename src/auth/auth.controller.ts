import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { User } from 'src/common/decorators/user.decorator';
import { User as UserEntity } from 'src/users/entities/user.entity';
import { JwtAuthguard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {

    @UseGuards(LocalAuthGuard, JwtAuthguard)
    @Post('login')
    async login(
        @User() user: UserEntity
    ){
        return user;
    }

    @Get('profile')
    async profile(){
        return "profss"
    }
}
