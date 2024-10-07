import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UrlsModule } from './urls/urls.module';
import { AnalyticsModule } from './analytics/analytics.module';



@Module({
  imports: [DatabaseModule, UrlsModule, AnalyticsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
