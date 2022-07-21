import { createSlice } from "@reduxjs/toolkit";
import React from "react";

type Response = {
  status: number,
  message: string
}

type CurrentWeather = {
  weather: any,
  isLoading: boolean,
  response: Response
}

const initialState = {
  weather: {},
  isLoading: false,
  response: {
    status: 0,
    message: ' ',
  }
}


export const CurrentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState: initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true
    },
    fetchCurrentWeatherSucess(state,action:any) {
      state.weather = action
    }
  }
})