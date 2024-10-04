import { Injectable } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { DatabaseService } from 'src/database/database.service';
import { nanoid } from 'nanoid';

@Injectable()
export class UrlsService {
  constructor (private readonly databaseService:  DatabaseService){}

  findAll() {
    return this.databaseService.url.findMany();
  }

  async create(createUrlDto: CreateUrlDto) {
 
    let shortUrl = createUrlDto.short_url ? createUrlDto.short_url : null; 
    // let expiry = createUrlDto.expires_at ? new Date(Date.now() + createUrlDto.expires_at * 60 * 60 * 1000) : null

    await this.databaseService.url.create({data: {expries_at:null, short_url:shortUrl, original_url:createUrlDto.original_url}})
  
    return 'success';
  }



  findOne(id: string) {
    //check expiry and return url 
    return this.databaseService.url.findUnique({where : {short_url:id}});
  }

}
