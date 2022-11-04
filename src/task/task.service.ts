import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  @Cron(CronExpression.EVERY_DAY_AT_8AM)
  handleTask() {
    console.log('test');
  }
}
