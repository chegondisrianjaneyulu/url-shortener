import { Injectable } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { DatabaseService } from 'src/database/database.service';


@Injectable()
export class UrlsService {
  constructor (private readonly databaseService:  DatabaseService){}

  findAll() {
    return this.databaseService.url.findMany();
  }

  async create(createUrlDto: CreateUrlDto) {
 
    let shortUrl = null 
    let expiry = null

    if ( createUrlDto.short_url ) {
      shortUrl = createUrlDto.short_url
    }

    if ( createUrlDto.expires_at ) {
      expiry = createUrlDto.expires_at
    }

    await this.databaseService.url.create({data: {expries_at:expiry, short_url:shortUrl, original_url:createUrlDto.original_url}})
  
    return 'success';
  }



  findOne(id: string) {
    //check expiry and return url 
    return this.databaseService.url.findUnique({where : {short_url:id}});
  }

}
