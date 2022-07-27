import { RootState } from "./Store";

export const selectCurrentWeatherData = (state: RootState) => state.currentWeatherSliceReducer;
export const selectCurrentCity = (state: RootState) => state.citySliceReducer.selectedCity; 