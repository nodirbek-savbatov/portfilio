import { MailerService } from '@nestjs-modules/mailer';
import { sendMailDto } from './dtos';
export declare class MailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendMail(payload: sendMailDto): Promise<void>;
}
