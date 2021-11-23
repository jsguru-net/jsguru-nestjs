import { Controller, Get, Query, Render, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor() {
    // TODO
  }

  @Get()
  @Render('pages/home') // use this decorator to specify the view
  home(@Query('username') username: string): { username: string } {
    // PARAMS THAT WILL BE BIND INTO VIEW TEMPLATE
    return {
      username,
    };
  }
}
