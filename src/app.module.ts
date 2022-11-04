import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { Twitter } from './providers/twitter.provider';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [],
  providers: [Twitter],
})
export class AppModule {}
