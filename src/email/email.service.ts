import { Injectable } from '@nestjs/common';
import { ResetEmailDto } from './dto/reset-email.dto';
import { mailTemplate } from './models/mail-template';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
  ) {}

  async refreshPasswordRequest(dto: ResetEmailDto) {
    const email = { ...mailTemplate, ...dto};
    try {
      return await this.mailerService.sendMail(email);
    } catch (err) {
      return `Error sending email ${err}`;
    }
  }
}
