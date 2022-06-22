import { WeatherService } from './weather.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Weather } from './weather.model';

@Resolver(() => Weather)
export class WeatherResolver {
  constructor(private weatherService: WeatherService) {}

  @Query(() => Weather)
  getWeather(
    @Args('lat', { nullable: false }) lat: string,
    @Args('lon', { nullable: false }) lon: string,
    @Args('date', { nullable: true }) date: number,
  ) {
    const inputDate: Date = date ? new Date(date) : new Date();
    return this.weatherService.getWeather({ latApi: lat, lonApi: lon, date: inputDate });
  }
}
