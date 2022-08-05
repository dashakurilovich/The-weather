import { RootState } from "..";


export const selectForecastWeatherData = (state: RootState) => state.forecastWeatherSliceReducer;
