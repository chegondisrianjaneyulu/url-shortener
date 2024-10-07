import { Injectable } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { DatabaseService } from 'src/database/database.service';
const shortid = require('shortid');

@Injectable()
export class UrlsService {
  constructor (private readonly databaseService:  DatabaseService){}

  findAll() {
    return this.databaseService.url.findMany({include: {analytics:true}});
  }

  async create(createUrlDto: CreateUrlDto) {
    let shortUrl = shortid.generate()
    const expiresAt = createUrlDto.expires_at ? new Date(Date.now() + createUrlDto.expires_at * 60 * 60 * 1000) : null
    await this.databaseService.url.create({data: {expries_at:expiresAt, short_url:shortUrl, original_url:createUrlDto.original_url}})
    return 'success';
  }

  async findOne(id: string) {

    let url =  await this.databaseService.url.findUnique({where : {short_url:id}});

    if ( !url || (url.expries_at && url.expries_at < new Date()) ) {
      throw new Error('URL not found or expired.');
    }

    await this.databaseService.url.update({ where : {short_url: id}, data : {clicks: {increment: 1}} })
    
    return url;
  }

  async saveAnalytics(shortUrl:string, ip:string, device:string) {
    const url = await this.databaseService.url.findUnique({where: {short_url: shortUrl}})

    if (url) {
      await this.databaseService.analytics.create({
        data: {
          url_id : url.id,
          ip_address: ip,
          device: device
        }
      })
    }

  }

}
