import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

import { Weather } from "../types/types";

type CurrentWeather = {
  weather: Weather,
  isLoading: boolean,
}

const initialState: CurrentWeather = {
  weather: {
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0
    },
    name: '',
    weather: {
      main: ' ',
      description: '',
      icon: ''
    },
    wind: {
      speed: 0
    },
    timezone: 0
  },
  isLoading: false,
};

export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<Weather>>) {
      state.weather = action.payload.data;
      state.isLoading = false;
    },
    fetchCurrentWeatherError(state) {
      state.isLoading = false;
    }
  }
})

export default currentWeatherSlice.reducer;