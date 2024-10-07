import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class AnalyticsService {
  
  constructor(private readonly databaseService: DatabaseService){}

  async findAll() {
    return await this.databaseService.analytics.findMany({include: {url:true}});
  }

  async findOne(id: number) {
    return await this.databaseService.analytics.findUnique({where: {id}});
  }

  


}
