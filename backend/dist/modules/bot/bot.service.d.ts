import { Context, Telegraf } from 'telegraf';
export declare class BotService {
    private bot;
    constructor(bot: Telegraf<Context>);
    onStart(ctx: Context): Promise<void>;
    onServices(ctx: Context): Promise<void>;
    private serVicesDemo;
    onContact(ctx: Context): Promise<void>;
    sendPhone(ctx: Context): Promise<void>;
    sendLocation(ctx: Context): Promise<void>;
    onBackToMain(ctx: Context): Promise<void>;
    onsendResume(ctx: Context): Promise<void>;
    onProjects(ctx: Context): Promise<void>;
    onAbout(ctx: Context): Promise<void>;
}
