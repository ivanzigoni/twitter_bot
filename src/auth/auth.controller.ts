import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  @Get('/callback')
  callback(@Req() request: Request) {
    console.log(request);
  }
}
