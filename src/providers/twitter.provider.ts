import { Injectable } from '@nestjs/common';
import { TwitterApi, TwitterApiReadWrite } from 'twitter-api-v2';
import { env } from '../config/env';

export const TWITTER_TOKEN = 'TWITTER';

@Injectable()
export class TwitterService {
  private readonly ttApi: TwitterApiReadWrite;
  constructor() {
    console.log(env);
    const twitterApi = new TwitterApi({
      appKey: env.APP_KEY,
      appSecret: env.APP_SECRET,
      accessToken: env.ACCESS_TOKEN,
      accessSecret: env.ACCESS_SECRET,
    });

    this.ttApi = twitterApi.readWrite;
  }

  async tweet(content: string) {
    this.ttApi.v2.tweet(content);
  }
}
