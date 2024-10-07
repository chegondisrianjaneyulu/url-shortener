import { Controller, Get,  Param, ParseIntPipe } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';


@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get()
  findAll() {
    return this.analyticsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.analyticsService.findOne(id);
  }

 
}
