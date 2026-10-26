"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    app.enableCors({
        origin: ['http://localhost:3000', 'http://localhost:3005', 'https://helix24.in', 'https://www.helix24.in'],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Helix24 Agency Enterprise API')
        .setDescription('Full-stack API portal for Lead Management, Ad Spend Calculations, Blog Resources, and System Health Monitoring.')
        .setVersion('1.0')
        .addTag('Leads', 'Lead capture and WhatsApp conversion pipeline')
        .addTag('Health', 'Operational system status endpoints')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    const port = process.env.PORT || 3001;
    await app.listen(port);
    console.log(`🚀 Helix24 NestJS Backend is running on: http://localhost:${port}`);
    console.log(`📄 Swagger OpenAPI Documentation live at: http://localhost:${port}/api/docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map