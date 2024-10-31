"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailConfig = void 0;
const emailConfig = () => ({
    email: {
        mail_host: process.env.MAIL_HOST,
        mail_port: process.env.MAIL_PORT,
        mail_user: process.env.MAIL_USER,
        mail_password: process.env.MAIL_PASS,
    }
});
exports.emailConfig = emailConfig;
//# sourceMappingURL=email.config.js.map