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
exports.MailController = void 0;
const common_1 = require("@nestjs/common");
const mail_service_1 = require("./mail.service");
const swagger_1 = require("@nestjs/swagger");
const dtos_1 = require("./dtos");
let MailController = class MailController {
    constructor(mailService) {
        this.mailService = mailService;
    }
    async sendEmail(payload) {
        try {
            await this.mailService.sendMail(payload);
            return { message: 'Email sent successfully' };
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException('Failed to send email');
        }
    }
};
exports.MailController = MailController;
__decorate([
    (0, common_1.Post)('send'),
    (0, swagger_1.ApiBody)({ type: dtos_1.sendMailDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.sendMailDto]),
    __metadata("design:returntype", Promise)
], MailController.prototype, "sendEmail", null);
exports.MailController = MailController = __decorate([
    (0, swagger_1.ApiTags)('mail'),
    (0, common_1.Controller)('mail'),
    __metadata("design:paramtypes", [mail_service_1.MailService])
], MailController);
//# sourceMappingURL=mail.controller.js.map