import { Weather } from './weather.model';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { getDifferenceDate, prepareApiUrl } from '../../../utils';

const getApiWeather = async ({
  latApi,
  lonApi,
  date,
}: {
  latApi: string;
  lonApi: string;
  date: Date;
}): Promise<Weather> => {
  try {
    const { data }: { data: Weather } = await axios.get(prepareApiUrl(latApi, lonApi));
    const selectDay: number = getDifferenceDate(new Date(), date);

    return {
      ...data,
      daily: [data.daily[selectDay]],
    };
  } catch (error) {
    return error;
  }
};

@Injectable()
export class WeatherService {
  async getWeather({ latApi, lonApi, date }: { latApi: string; lonApi: string; date: Date }) {
    const response: Weather = await getApiWeather({ latApi, lonApi, date });

    return {
      ...response,
    };
  }
}
