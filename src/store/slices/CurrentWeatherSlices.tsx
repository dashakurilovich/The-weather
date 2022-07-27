import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import React from "react";
import { Weather } from "../types/types";

type ResponseType = {
  status: number,
  message: string
}

type CurrentWeather = {
  weather: Weather,
  isLoading: boolean,
  response: ResponseType
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
    name: ''
  },
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
};

export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fethCurrentWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<Weather>>) {
      state.weather = action.payload.data;
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText
      }
    },
    fethCurrentWeatherError(
      state,
      action: PayloadAction<AxiosResponse<Weather>>) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText
      }
    }
  }
})

export default currentWeatherSlice.reducer;