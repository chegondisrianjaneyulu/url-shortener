import { Controller, Get, Post, Body,  Param,  ValidationPipe, Res, Req } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { CreateUrlDto } from './dto/create-url.dto';
import {Response, Request} from 'express'
import * as useragent from 'useragent';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  //get all the urls
  @Get()
  findAll() {
    return this.urlsService.findAll();
  }

  //create short url
  @Post()
  create(@Body(ValidationPipe) createUrlDto: CreateUrlDto) {
    return this.urlsService.create(createUrlDto);
  }


  //get url by shortid
  @Get(':shortid')
  async findOne(@Param('shortid') shortid: string, @Res() res: Response, @Req() req: Request) {
    //redirect the response to url
    let url =  await this.urlsService.findOne(shortid);

    const ip = req.ip
    const device = useragent.parse(req.headers['user-agent'])

    this.urlsService.saveAnalytics(shortid, ip, device.toString())

    if (url) {
      return res.redirect(url.original_url);
    }
    else {
      return res.status(404).json({ message: 'URL not found' });
    }
   
  }


}
