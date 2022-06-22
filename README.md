## Description
Simple NestJS Application that takes latitude and longitude and returns the weather description for that location.

| App used          |
|-------------------|
| GraphQL           |
| Simple validation |
| Simple unit test  |

## Installation

```bash
1. npm install
2. rename .env.example to .env
3. write correct values to .env file
```

## Running the app

```bash
$ npm run start
```

## Test

```bash
$ npm run test
```

## Test Query
1. you need run application ```npm run start```
2. open browser and pass url ```http://localhost:3000/graphql```
3. enter a query where the value ```date``` is optional which is equal to the current date or the next days
```
query {
  getWeather(lat: "40", lon: "40", date: 1655802000) {
    lat
    lon
    daily {
      dt
      weather {
        id
        icon
        main
        description
      }
    }
  }
}
```
result 
```
{
  "data": {
    "getWeather": {
      "lat": "40",
      "lon": "40",
      "daily": [
        {
          "dt": 1655802000,
          "weather": [
            {
              "id": 500,
              "icon": "10d",
              "main": "Rain",
              "description": "light rain"
            }
          ]
        }
      ]
    }
  }
}
```


## License

Nest is [MIT licensed](LICENSE).
