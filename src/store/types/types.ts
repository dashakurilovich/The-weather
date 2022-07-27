export type Weather = {
  main: {
    temp: number;
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
  name: string,
  weather: {
    main: string,
    description: string
    icon:string
  },
  wind: {
    speed: number
  },
}

