import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { appConfig, emailConfig } from './config';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotModule } from './modules/bot/bot.module';
import { MailModule } from './modules/mail/mail.module';
import { session } from 'telegraf';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      serveRoot: '/uploads',
      rootPath: './uploads',
    },{
      serveRoot: '/',
      rootPath: './frontend',
    }),

    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig,emailConfig],
      envFilePath: '.env'
    }),

    TelegrafModule.forRoot({
      token: process.env.BOT_TOKEN,
      middlewares: [
        session(),
      ]
    }),

    MailModule,
    BotModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
