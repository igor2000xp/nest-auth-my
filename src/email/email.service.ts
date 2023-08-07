import { Injectable } from '@nestjs/common';
import { ResetEmailDto } from './dto/reset-email.dto';
import { mailTemplate } from './models/mail-template';
import * as SendGrid from '@sendgrid/mail';

@Injectable()
export class EmailService {
  constructor() {
    SendGrid.setApiKey('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');
  }

  async refreshPasswordRequest(dto: ResetEmailDto) {
    const email = { ...mailTemplate, ...dto};
    try {
      return await SendGrid.send(email);
    } catch (err) {
      return `Error sending email ${err}`;
    }
  }
}
