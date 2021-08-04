import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import {AuthDTO} from "./dto/auth.dto";

@Controller('auth')
export class AuthController {

    @HttpCode(200)
    @Post('register')
    async register(@Body() dto: AuthDTO) {}

    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: AuthDTO) {}
}