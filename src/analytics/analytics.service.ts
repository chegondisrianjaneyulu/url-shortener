import { Injectable } from '@nestjs/common';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { UpdateAnalyticsDto } from './dto/update-analytics.dto';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class AnalyticsService {
  
  constructor(private readonly databaseService: DatabaseService){}

  async create(createAnalyticsDto: CreateAnalyticsDto) {
    return await this.databaseService.analytics.create({data:createAnalyticsDto});
  }

  async findAll() {
    return await this.databaseService.analytics.findMany({});
  }

  async findOne(id: number) {
    return await this.databaseService.analytics.findUnique({where: {id}});
  }


}
