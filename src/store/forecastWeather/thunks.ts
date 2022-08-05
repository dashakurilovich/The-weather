import { WeatherService } from "../../services/weatherService";
import { AppDispatch } from "..";
import { forecastWeatherSlice } from "./slice";



export const fetchForecastWeather = (city: string) => async (dispatch: AppDispatch) => {
  dispatch(forecastWeatherSlice.actions.fetchForecastWeatherPending())

  try {
    const response = await WeatherService.getForecastWeather(city)
    dispatch(forecastWeatherSlice.actions.fetchForecastWeatherSuccess(response))

    console.log('response', response);
  } catch (error) {
    console.log('error', error);
    dispatch(forecastWeatherSlice.actions.fetchForecastWeatherFailure())

  }
}