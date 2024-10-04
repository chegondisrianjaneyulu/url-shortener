import { Module } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { UrlsController } from './urls.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [UrlsController],
  providers: [UrlsService],
  imports: [DatabaseModule]
})
export class UrlsModule {}
