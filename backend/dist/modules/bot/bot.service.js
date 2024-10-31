"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const path = require("path");
const telegraf_1 = require("telegraf");
let BotService = class BotService {
    constructor(bot) {
        this.bot = bot;
    }
    async onStart(ctx) {
        try {
            ctx.reply(`Hello ${ctx.from.first_name}, welcome to our info bot.
You will get information about Nodirbek Savbatov through this bot.`, {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: '🖇Resume', callback_data: 'resume' },
                            { text: '🛠 Projects', callback_data: 'projects' },
                            { text: '📬Contact', callback_data: 'contact' },
                        ],
                        [
                            { text: '⚙️Services', callback_data: 'services' },
                            { text: '🔉About', callback_data: 'about' },
                        ],
                    ],
                },
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    async onServices(ctx) {
        try {
            ctx.editMessageText('Xizmatlardan birini tanlang 😊', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: '🐈‍⬛ NestJS', callback_data: 'nestjs', url: "https://nestjs.com/" },
                            { text: '📦 ExpressJS', callback_data: 'expressjs', url: "https://expressjs.com/" },
                            { text: '🤖 Telegram bot', callback_data: 'telegram_bot', url: "https://core.telegram.org/bots/api" },
                            { text: '🟢 NodeJs', callback_data: 'node_js' },
                        ], [
                            { text: '🗄️ SQL/NoSQL', callback_data: 'database', url: "https://www.postgresql.org/" },
                            { text: '📄 HTML/CSS', callback_data: 'html_css', url: "https://en.wikipedia.org/wiki/CSS" },
                            { text: '🎨 Bootstrap', callback_data: 'bootstrap', url: "https://getbootstrap.com/docs/5.3/getting-started/introduction/" },
                        ],
                        [
                            { text: '🔷 Typescript', callback_data: 'typescript', url: "https://www.typescriptlang.org/" },
                            { text: '🐳 Docker', callback_data: 'docker', url: "https://www.docker.com/" },
                            { text: '🐧 Linux', callback_data: 'linux', url: "https://www.linux.org/" },
                        ],
                        [
                            { text: '📜 Swagger/Postman', callback_data: 'swagger_postman', url: "https://swagger.io/" },
                            { text: '👤 OOP', callback_data: 'oop', url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming" },
                            { text: '🔌 Socket', callback_data: 'socket', url: "https://socket.io/" },
                        ],
                        [
                            { text: '🌐 REST API/GraphQl', callback_data: 'res_api', url: "https://www.techtarget.com/searchapparchitecture/definition/RESTful-API" },
                            { text: '🧩 Monolit/Microservice', callback_data: 'monolit_microservices', url: "https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith" },
                        ],
                        [{ text: '◀️Back', callback_data: 'back_to_main' }],
                    ],
                },
            });
        }
        catch (error) {
            console.log(`Error on services: ${error}`);
            ctx.reply('Nimadur xato ketdi');
        }
    }
    async serVicesDemo(ctx) {
        try {
            await ctx.reply(`Hello ${ctx.from.first_name}, welcome back to the menu.`, {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: '🖇Resume', callback_data: 'resume' },
                            { text: '🛠 Projects', callback_data: 'projects' },
                            { text: '📬Contact', callback_data: 'contact' },
                        ],
                        [
                            { text: '⚙️Services', callback_data: 'services' },
                            { text: '🔉About', callback_data: 'about' },
                        ],
                    ],
                },
            });
        }
        catch (error) {
            console.log(`Error sending menu: ${error}`);
        }
    }
    async onContact(ctx) {
        try {
            await ctx.editMessageText('Contact department', {
                reply_markup: {
                    inline_keyboard: [[
                            { text: '📞 Phone', callback_data: 'phone' },
                            { text: '📍 Location', callback_data: 'location' },
                            { text: '✈️ Telegram', url: "https://t.me/savbatov_office" },
                        ], [
                            { text: '🐙 Github', url: "https://github.com/nodirbek-savbatov?tab=repositories" },
                            { text: '💼 Linked in', url: "https://www.linkedin.com/in/nodirbek-savbatov-976aab295/" },
                            { text: '🔗 Site', url: "https://nodirbek-savbatov.uz/" }
                        ],
                        [{ text: '◀️ Back', callback_data: 'back_to_main' }],
                    ]
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    async sendPhone(ctx) {
        try {
            await ctx.sendContact('+998991210416', 'Nodirbek Savbatov');
        }
        catch (error) {
            console.log(error);
        }
    }
    async sendLocation(ctx) {
        try {
            const latitude = 41.2615;
            const longitude = 69.2177;
            await ctx.sendLocation(latitude, longitude);
        }
        catch (error) {
            console.log(error);
        }
    }
    async onBackToMain(ctx) {
        try {
            ctx.editMessageText(`Hello ${ctx.from.first_name}, welcome to our info bot.
You will get information about Nodirbek Savbatov through this bot.`, {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: '🖇Resume', callback_data: 'resume' },
                            { text: '🛠 Projects', callback_data: 'projects' },
                            { text: '📬Contact', callback_data: 'contact' },
                        ],
                        [
                            { text: '⚙️Services', callback_data: 'services' },
                            { text: '🔉About', callback_data: 'about' },
                        ],
                    ],
                },
            });
        }
        catch (error) {
            console.log(`Error on back to main: ${error}`);
            ctx.reply('Nimadur xato ketdi');
        }
    }
    async onsendResume(ctx) {
        try {
            const message = await ctx.reply('Processing, please wait a moment...');
            const filePath = path.join(__dirname, '../../../uploads/nodirbek-savbatov-resume.pdf');
            await ctx.sendDocument({ source: filePath });
            await ctx.deleteMessage(message.message_id);
        }
        catch (error) {
            console.error(`Error sending resume: ${error}`);
            console.log(error);
            await ctx.reply("Rezyume yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
        }
    }
    async onProjects(ctx) {
        try {
            ctx.editMessageText('My Projects', {
                reply_markup: {
                    inline_keyboard: [[
                            { text: '🏬 Real Estate', url: "https://github.com/nodirbek-savbatov/home_project" },
                        ],
                        [{ text: '◀️ Back', callback_data: 'back_to_main' }],
                    ]
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    async onAbout(ctx) {
        try {
            ctx.editMessageText(`Before working for companies, I created my own independent group. I also have leadership skills to lead group. I can integrate APIs of any services into projects (for example: Payment, Yandex, Tax, MoySklad). I guarantee to complete projects fast and with high quality. I work on myself regularly. I am always ready to learn new technologies.`, {
                reply_markup: {
                    inline_keyboard: [[
                            { text: '◀️ Back', callback_data: 'back_to_main' }
                        ],
                    ]
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.BotService = BotService;
exports.BotService = BotService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_telegraf_1.InjectBot)()),
    __metadata("design:paramtypes", [telegraf_1.Telegraf])
], BotService);
//# sourceMappingURL=bot.service.js.map