import { Ctx, Start, Update, Action, On } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { BotService } from './bot.service';

@Update()
export class BotUpdate {
  constructor(private readonly botService: BotService) {}

  @Start()
  async onStart(@Ctx() ctx: Context) {
    return this.botService.onStart(ctx);
  }

  @Action('services')
  async onServices(@Ctx() ctx: Context) {
    return this.botService.onServices(ctx);
  }

  @Action('nestjs')
  async onNestJS(@Ctx() ctx: Context) {
    ctx.editMessageText('Siz NestJS xizmatini tanladingiz 😊');
  }

  @Action('expressjs')
  async onExpressJS(@Ctx() ctx: Context) {
    ctx.editMessageText('Siz ExpressJS xizmatini tanladingiz 😊');
  }

  @Action('back_to_main')
  async onBackToMain(@Ctx() ctx: Context) {
    return this.botService.onBackToMain(ctx);
  }

  @Action('resume')
  async onSendResume(@Ctx() ctx: Context) {
    return this.botService.onsendResume(ctx);
  }

  // contact

  @Action('contact')
  async toContacts(@Ctx() ctx: Context) {
    return this.botService.onContact(ctx);
  }

  @Action('phone')
  async onSendPhone(@Ctx() ctx: Context) {
    return this.botService.sendPhone(ctx);
  }

  @Action('location')
  async onSendLocation(@Ctx() ctx: Context) {
    return this.botService.sendLocation(ctx);
  }

  // Projects

  @Action('projects')
  async onProjects(@Ctx() ctx: Context) {
    return this.botService.onProjects(ctx);
  }

  // About
  @Action('about')
  async onAbout(@Ctx() ctx: Context) {
    return this.botService.onAbout(ctx);
  }





}