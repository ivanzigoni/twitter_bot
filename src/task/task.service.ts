import { Inject, Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { serializeWeather } from 'src/helpers/tweet.formating';
import { TwitterService, TWITTER_TOKEN } from 'src/providers/twitter.provider';
import { WeatherService, WEATHER_TOKEN } from 'src/providers/weather.provider';

@Injectable()
export class TaskService {
  constructor(
    @Inject(WEATHER_TOKEN)
    private weatherService: WeatherService,
    @Inject(TWITTER_TOKEN)
    private twitterService: TwitterService,
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  // @Cron(CronExpression.EVERY_DAY_AT_8AM)
  async handleMorningTask() {
    try {
      const tweetFromWeather = await this.fetchWeather();
      this.twitterService.tweet(tweetFromWeather);
    } catch (e) {
      console.log(e);
    } finally {
      console.log('finally');
    }
  }

  // @Cron(CronExpression.EVERY_DAY_AT_6PM)
  // async handleAfternoonTask() {
  //   try {
  //     const tweetFromWeather = await this.fetchWeather();
  //     this.twitterService.tweet(tweetFromWeather);
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     console.log('finally');
  //   }
  // }

  async fetchWeather() {
    const { data } = await this.weatherService.getForecast();
    return serializeWeather(data);
  }
}
