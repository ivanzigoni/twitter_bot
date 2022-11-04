import * as dotenv from 'dotenv';
dotenv.config();
import { Injectable } from '@nestjs/common';
import { TwitterApi, TwitterApiReadWrite } from 'twitter-api-v2';

@Injectable()
export class Twitter {
  private readonly ttApi: TwitterApiReadWrite;
  constructor() {
    const twitterApi = new TwitterApi({
      appKey: process.env.APP_KEY,
      appSecret: process.env.APP_SECRET,
      accessToken: process.env.ACCESS_TOKEN,
      accessSecret: process.env.ACCESS_SECRET,
    });

    this.ttApi = twitterApi.readWrite;
  }

  async tweet(content: string) {
    this.ttApi.v2.tweet(content);
  }
}
