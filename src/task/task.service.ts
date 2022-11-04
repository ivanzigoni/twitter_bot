import { Inject, Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Twitter, TWITTER_TOKEN } from 'src/providers/twitter.provider';
import { Weather, WEATHER_TOKEN } from 'src/providers/weather.provider';

@Injectable()
export class TaskService {
  constructor(
    @Inject(WEATHER_TOKEN)
    private weatherService: Weather,
    @Inject(TWITTER_TOKEN)
    private twitterService: Twitter,
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  // @Cron(CronExpression.EVERY_DAY_AT_8AM)
  async handleTask() {
    try {
      // this.twitterService.tweet('testando service do bot lol');
      // const weather = await this.weatherService.getForecast();
      // console.log(weather);
    } catch (e) {
      console.log(e);
    } finally {
      console.log('finally');
    }
  }

  async fetchWeather() {
    const weather = await this.weatherService.getForecast();
  }
}
