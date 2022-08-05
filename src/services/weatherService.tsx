import{ AxiosResponse } from "axios";
import api from "../axios";
import {  ForecastWeatherList, Weather } from "../store/types/types";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?q=${city}`)
  }

  static getForecastWeather(city: string): Promise<AxiosResponse<ForecastWeatherList>> {
    return api.get<ForecastWeatherList>(`forecast?q=${city}`)
  }
} 
