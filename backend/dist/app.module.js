"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const config_2 = require("./config");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const bot_module_1 = require("./modules/bot/bot.module");
const mail_module_1 = require("./modules/mail/mail.module");
const telegraf_1 = require("telegraf");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                serveRoot: '/uploads',
                rootPath: './uploads',
            }, {
                serveRoot: '/',
                rootPath: './frontend',
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [config_2.appConfig, config_2.emailConfig],
                envFilePath: '.env'
            }),
            nestjs_telegraf_1.TelegrafModule.forRoot({
                token: process.env.BOT_TOKEN,
                middlewares: [
                    (0, telegraf_1.session)(),
                ]
            }),
            mail_module_1.MailModule,
            bot_module_1.BotModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map