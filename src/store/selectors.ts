import { RootState } from "./Store";

export const selectCurrentWeatherData = (state: RootState) => state.currentWeatherSliceReducer; 