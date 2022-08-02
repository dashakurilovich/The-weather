import { WeatherService } from "../../services/weatherService";
import { AppDispatch } from "..";



export const fetchForecastWeather = (city: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await WeatherService.getForecastWeather(city)
    console.log('response', response);
  } catch (error) {
    console.log('error', error);
  }
}