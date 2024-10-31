import { MailService } from './mail.service';
import { sendMailDto } from './dtos';
export declare class MailController {
    private readonly mailService;
    constructor(mailService: MailService);
    sendEmail(payload: sendMailDto): Promise<{
        message: string;
    }>;
}
