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
  respone: ResponseType
}


const initialState = {
  weather: {},
  isLoading: false,
  response: {
    status: 0,
    message: ''
  }
}

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