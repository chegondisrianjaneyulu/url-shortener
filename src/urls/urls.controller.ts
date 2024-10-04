import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { CreateUrlDto } from './dto/create-url.dto';


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
  findOne(@Param('short-id') shortid: string) {
    //redirect the response to url
    return this.urlsService.findOne(shortid);
  }


}
