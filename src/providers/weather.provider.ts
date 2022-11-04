import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

export const WEATHER_TOKEN = 'WEATHER';

@Injectable()
export class Weather {
  constructor(private readonly httpService: HttpService) {}

  async getForecast(woeid = '455821'): Promise<AxiosResponse<Weather>> {
    const url = `https://api.hgbrasil.com/weather?key=${process.env.KEY}&woeid=${woeid}`;
    return this.httpService.axiosRef.get(url);
  }
}
