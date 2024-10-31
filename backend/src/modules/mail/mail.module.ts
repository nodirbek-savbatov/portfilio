import { Module } from "@nestjs/common";
import { MailService } from "./mail.service";
import { MailController } from "./mail.controller";
import { MailerModule } from "@nestjs-modules/mailer";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [
        MailerModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (config: ConfigService)=>({
              transport: {
                host: config.get<string>("email.mail_host"),
                port: config.get<number>("email.mail_port"),
                auth:  {
                  user: config.get<string>("email.mail_user"),
                  pass: config.get<string>("email.mail_password")
                }
              },
              defaults: {
                from: `"Portfilio" <${config.get<string>("email.mail_user")}>`
              }
            })
      
          }),
    ],
    providers: [MailService],
    controllers: [MailController]
})
export class MailModule{}
