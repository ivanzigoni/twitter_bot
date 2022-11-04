import { Controller, Get, Res } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('/callback')
  callback(@Res() response: Response) {
    console.log(response);
  }
}
