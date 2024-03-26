export interface Weather {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: { sunrise: number; sunset: number; country: string };
  timezone: number;
  visibility: number;
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    }
  ];
  wind: { speed: number; deg: number; gust: number };
}
