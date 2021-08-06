import { Controller, Post, HttpCode, Body, UsePipes, ValidationPipe, BadRequestException } from '@nestjs/common';
import { AuthDTO } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { ALREADY_REGISTERED_ERROR } from './auth.constants';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('register')
	async register(@Body() dto: AuthDTO) {
		const exists = await this.authService.findUser(dto.login);
		if(exists) {
			throw new BadRequestException(ALREADY_REGISTERED_ERROR);
		}

		return this.authService.createUser(dto);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login')
	async login(@Body() {login, password}: AuthDTO) {
		const { email } = await this.authService.validateUser(login, password);
		return this.authService.login(email)
	}
}