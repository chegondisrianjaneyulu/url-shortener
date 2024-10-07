import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
  imports: [DatabaseModule]
})
export class AnalyticsModule {}
