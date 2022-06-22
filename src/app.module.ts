import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { WeatherService } from './modules/weather/weather.service';
import { WeatherResolver } from './modules/weather/weather.resolver';
import 'dotenv/config';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
    }),
  ],
  controllers: [],
  providers: [WeatherService, WeatherResolver],
})
export class AppModule {}
