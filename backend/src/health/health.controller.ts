import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  @Get()
  @ApiOperation({ summary: 'Check NestJS backend operational health status' })
  @ApiResponse({ status: 200, description: 'Backend service is online and operational' })
  checkHealth() {
    return {
      status: 'ok',
      service: 'Helix24 Enterprise API Engine',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      uptimeSeconds: process.uptime(),
    };
  }
}
