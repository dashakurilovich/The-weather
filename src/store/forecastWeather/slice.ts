import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { ForecastWeather, ForecastWeatherList } from "../types/types";


export type ForecastWeatherSliceType = {
  list: Array<ForecastWeather>,
  isLoading: boolean
}

const initialState: ForecastWeatherSliceType = {
  list: [],
  isLoading: false
}

export const forecastWeatherSlice = createSlice({
  name: 'forecast_city_slice',
  initialState,
  reducers: {
    fetchForecastWeatherPending(state) {
      state.isLoading = true
    },
    fetchForecastWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<ForecastWeatherList>>) {
      state.list = action.payload.data.list;
      state.isLoading = false
    },
    fetchForecastWeatherFailure(state) {
      state.isLoading = false
    }
  }
})

export default forecastWeatherSlice.reducer;