import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('')
export class AuthController {
  @Get('/callback')
  callback(@Req() request: Request) {
    console.log('inside auth route');
    console.log('HEADERS', request.headers);
    return JSON.stringify(request.headers);
  }
}
