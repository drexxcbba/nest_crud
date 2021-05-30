import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(
        @Req() req: any
    ){
        return req.user;
    }

    @Get('profile')
    async profile(){
        return "profss"
    }
}
