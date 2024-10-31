"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
async function startApp() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Portfilio')
        .setDescription('The Portfilio API description')
        .setVersion('1.0')
        .addTag('api')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, documentFactory);
    const configService = app.get(config_1.ConfigService);
    await app.listen(configService.get('app.port'), () => {
        console.log(`server is running on port: ${configService.get('app.port')}`);
    });
}
startApp();
//# sourceMappingURL=main.js.map