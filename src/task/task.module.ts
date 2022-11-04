import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TwitterService, TWITTER_TOKEN } from '../providers/twitter.provider';
import { WeatherService, WEATHER_TOKEN } from '../providers/weather.provider';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [
    TaskService,
    {
      provide: WEATHER_TOKEN,
      useClass: WeatherService,
    },
    {
      provide: TWITTER_TOKEN,
      useClass: TwitterService,
    },
  ],
  imports: [HttpModule],
})
export class TaskModule {}
