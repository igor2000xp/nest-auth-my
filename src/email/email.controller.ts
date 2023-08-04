import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { SendMailDto } from './dto/sendMail.dto';

@Controller('email')
export class EmailController {
  constructor(
    private readonly emailService: EmailService,
  ) {}

  @Post('send')
  async sendMail(@Body('emailData') emailData: SendMailDto): Promise<string> {
    try {
      return await this.emailService.sendMail(emailData);
    } catch (err) {

      throw new BadRequestException(err, 'Error: mail sending is failed' );
    }

}
}
