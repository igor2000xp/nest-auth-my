import { Injectable } from '@nestjs/common';
import { SendEmailDto } from './dto/send-email.dto';
// import { mailTemplate } from './models/mail-template';
// import { MailerService } from '@nestjs-modules/mailer';
import { clientData, messageData } from './models/mail-template';
// import { SMTPClient } from 'emailjs';
import * as emailjs from 'emailjs';


@Injectable()
export class EmailService {
  private readonly client: SMTPClient;
  constructor() {
    this.client = new SMTPClient(clientData);
  }

  async refreshPasswordRequest(dto: SendEmailDto) {
    const email = { ...messageData};
    email.to = dto.to;
    try {

      // await this.client.connect();
      return await this.client.sendAsync(messageData);
      // return email;
    } catch (err) {
      return `Error sending email ${err}`;
    }
  }
}
