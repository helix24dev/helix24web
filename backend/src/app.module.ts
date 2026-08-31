import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadsModule } from './leads/leads.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [LeadsModule, HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
