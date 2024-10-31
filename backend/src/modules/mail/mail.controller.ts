import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { MailService } from './mail.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { sendMailDto } from './dtos';

@ApiTags('mail')
@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  @ApiBody({ type: sendMailDto })
  async sendEmail(@Body() payload: sendMailDto) {
    try {
      await this.mailService.sendMail(payload);
      return { message: 'Email sent successfully' };
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Failed to send email');
    }
  }
}
