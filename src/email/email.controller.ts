import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { ResetEmailDto } from './dto/reset-email.dto';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() dto: ResetEmailDto) {
    return await this.emailService.refreshPasswordRequest(dto);
  }
}
