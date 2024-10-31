export const emailConfig = () =>({
    email: {
        mail_host: process.env.MAIL_HOST,
        mail_port: process.env.MAIL_PORT,
        mail_user: process.env.MAIL_USER,
        mail_password: process.env.MAIL_PASS,
    }
})