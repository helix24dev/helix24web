import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable Global Validation Pipe
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Enable CORS for frontend requests
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3005', 'https://helix24.in', 'https://www.helix24.in'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Swagger OpenAPI Documentation Setup
  const config = new DocumentBuilder()
    .setTitle('Helix24 Agency Enterprise API')
    .setDescription('Full-stack API portal for Lead Management, Ad Spend Calculations, Blog Resources, and System Health Monitoring.')
    .setVersion('1.0')
    .addTag('Leads', 'Lead capture and WhatsApp conversion pipeline')
    .addTag('Health', 'Operational system status endpoints')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`🚀 Helix24 NestJS Backend is running on: http://localhost:${port}`);
  console.log(`📄 Swagger OpenAPI Documentation live at: http://localhost:${port}/api/docs`);
}
bootstrap();
