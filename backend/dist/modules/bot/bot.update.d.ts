import { Context } from 'telegraf';
import { BotService } from './bot.service';
export declare class BotUpdate {
    private readonly botService;
    constructor(botService: BotService);
    onStart(ctx: Context): Promise<void>;
    onServices(ctx: Context): Promise<void>;
    onNestJS(ctx: Context): Promise<void>;
    onExpressJS(ctx: Context): Promise<void>;
    onBackToMain(ctx: Context): Promise<void>;
    onSendResume(ctx: Context): Promise<void>;
    toContacts(ctx: Context): Promise<void>;
    onSendPhone(ctx: Context): Promise<void>;
    onSendLocation(ctx: Context): Promise<void>;
    onProjects(ctx: Context): Promise<void>;
    onAbout(ctx: Context): Promise<void>;
}
