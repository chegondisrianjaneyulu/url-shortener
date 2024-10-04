import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UrlsModule } from './urls/urls.module';



@Module({
  imports: [DatabaseModule, UrlsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
