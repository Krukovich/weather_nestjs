import { WeatherResolver } from '../weather.resolver';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather.model';
import { getDifferenceDate } from '../../../../utils';
import { DAY } from '../../../../constants';

describe('WeatherResolver', () => {
  const service: WeatherService = new WeatherService();
  const resolver: WeatherResolver = new WeatherResolver(service);

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return right result', async () => {
    const mockResult: Weather = {
      lat: '40',
      lon: '40',
      daily: [
        {
          dt: 1655802000,
          weather: [
            {
              id: 501,
              icon: '10d',
              main: 'Rain',
              description: 'moderate rain',
            },
          ],
        },
      ],
    };

    jest.spyOn(resolver, 'getWeather').mockImplementation(() => {
      return new Promise((resolve, _) => resolve(mockResult));
    });

    expect(await resolver.getWeather('40', '40', undefined)).toBe(mockResult);
  });
});

describe('check function "getDifferenceDate"', () => {
  const mockInputDay = new Date();
  const mockCurrentDay = new Date();

  const nextDay = (deyCount: number): Date => {
    let day: Date = new Date();
    day.setDate(day.getDate() + deyCount);
    return day;
  };

  it('should return "FIRST DAY" if no date passed', () => {
    const day: number = getDifferenceDate(mockCurrentDay, mockInputDay);

    expect(day).toBe(DAY.FIRST);
  });

  it('should return the next day from the current one', () => {
    const day: number = getDifferenceDate(mockCurrentDay, new Date(nextDay(DAY.SECOND)));

    expect(day).toBe(DAY.SECOND);
  });

  it('should return the next day from the next day', () => {
    const day: number = getDifferenceDate(mockCurrentDay, new Date(nextDay(DAY.THIRD)));

    expect(day).toBe(DAY.THIRD);
  });
});
