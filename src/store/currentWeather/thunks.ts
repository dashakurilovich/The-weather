import { currentWeatherSlice } from "./slice";
import { AppDispatch } from "..";
import { WeatherService } from "../../services/weatherService";

export const fetchCurrentWeather = (city: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
    const res = await WeatherService.getCurrentWeather(city);
    console.log('res');

    dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))

  } catch (error: any) {
    console.log('error', error);
  }

}