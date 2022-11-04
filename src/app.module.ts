import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TaskModule } from './task/task.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [ScheduleModule.forRoot(), TaskModule],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}
