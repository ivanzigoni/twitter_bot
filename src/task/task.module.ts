import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { Twitter, TWITTER_TOKEN } from '../providers/twitter.provider';
import { Weather, WEATHER_TOKEN } from '../providers/weather.provider';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [
    TaskService,
    {
      provide: WEATHER_TOKEN,
      useClass: Weather,
    },
    {
      provide: TWITTER_TOKEN,
      useClass: Twitter,
    },
  ],
  imports: [HttpModule],
})
export class TaskModule {}
