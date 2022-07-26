import React from "react";
import { WeatherService } from "../../services/weatherService";
import { currentWeatherSlice } from "../slices/CurrentWeatherSlices";
import { AppDispatch } from "../Store";

export const fetchCurrentWeather =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
      const res = await WeatherService.getCurrentWeather(payload);

      if (res.status === 200) {
        dispatch(currentWeatherSlice.actions.
          fethCurrentWeatherSuccess(res))
      } else {
        dispatch(currentWeatherSlice.actions.fethCurrentWeatherError(res))
      }
    } catch (error) {
      console.log(error);

    }

  }