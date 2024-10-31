import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { sendMailDto } from './dtos';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(payload: sendMailDto): Promise<void> {
    const to = 'savbatovnodirbek@gmail.com';
    const date = new Date();
    const html = `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; line-height: 1.6;">
    <h2 style="color: #2C3E50;">${payload.email}</h2>
        <p><strong>Phone:</strong> ${payload.phone}</p>
    <p><strong>Address:</strong> ${payload.address}</p>
    <p><strong>Message:</strong> ${payload.text}</p>
    <p><strong>Date:</strong> ${date}</p> 
  </div>
`;

    await this.mailerService.sendMail({
      to,
      subject: payload.name,
      html,
    });
  }
}
