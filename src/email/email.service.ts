import { Injectable } from '@nestjs/common';
import * as emailjs from '@emailjs/browser';
import { SendMailDto } from './dto/sendMail.dto';

@Injectable()
export class EmailService {
  constructor() {
    emailjs.init('WMrHaBWAxN8COtrt_', );
  }

  async sendMail(emailData: SendMailDto): Promise<string> {
    const emailParams = {
      to_mail: emailData.to,
      to_name: 'Customer',
      from_name: 'TWSend',
      subject: emailData.subject,
      message: emailData.text,
    };
    try {
      await emailjs.send('service_w2tf8x6', 'template_msvm8e4', emailParams);
      return 'mail sent successfully';
    } catch (err) {
      return `Error sending email: ${err}`;
    }
  };
}
