import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class WeatherInfo {
  @Field()
  id: number;

  @Field()
  main: string;

  @Field()
  description: string;

  @Field()
  icon: string;
}

@ObjectType()
export class Daily {
  @Field()
  dt: number;

  @Field((type) => [WeatherInfo])
  weather: WeatherInfo[];
}

@ObjectType()
export class Weather {
  @Field((type) => [Daily])
  daily: Daily[];

  @Field()
  lat: string;

  @Field()
  lon: string;
}
