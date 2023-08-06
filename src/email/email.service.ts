import { Injectable } from '@nestjs/common';
import { SendEmailDto } from './dto/send-email.dto';
import { mailTemplate } from './models/mail-template';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private mailService: MailerService) {}

  async refreshPasswordRequest(dto: SendEmailDto) {
    const email = { ...mailTemplate, ...dto };
    try {
      return this.mailService.sendMail(email);
    } catch (err) {
      return `Error sending email ${err}`;
    }
  }
}
