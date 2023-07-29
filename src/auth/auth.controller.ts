import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {
  }
  @Post('register')
  register() {
    return 'This is the register route';
  }
}
