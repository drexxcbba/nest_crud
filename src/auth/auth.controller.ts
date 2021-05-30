import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { User } from 'src/common/decorators/user.decorator';
import { User as UserEntity } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { JwtAuthguard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(
        @User() user: UserEntity
    ){
        const data = this.authService.login(user);
        return {
            message: 'Succesfull login',
            data
        };
    }
    
    @UseGuards(JwtAuthguard)
    @Get('profile')
    async profile(){
        return "profss"
    }
}
