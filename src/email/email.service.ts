import { Injectable } from '@nestjs/common';
import { ResetEmailDto } from './dto/reset-email.dto';
import { mailTemplate } from './models/mail-template';
// import { MailerService } from '@nestjs-modules/mailer';
import { MailService } from '@sendgrid/mail';
// import { InjectSendGrid, SendGridService } from '@ntegral/nestjs-sendgrid';
import * as SendGrid from '@sendgrid/mail';

@Injectable()
export class EmailService {
  constructor(
    // private readonly mailerService: MailerService,
    // private readonly mailService: MailService,
    // @InjectSendGrid() private readonly client: SendGridService,
  ) {
    // this.mailService.setApiKey('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');
    SendGrid.setApiKey('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');
  }

  async refreshPasswordRequest(dto: ResetEmailDto) {
    const email = { ...mailTemplate, ...dto};
    try {
      // return await this.client.send(email);
      return await SendGrid.send(email);
    } catch (err) {
      return `Error sending email ${err}`;
    }
  }
}
