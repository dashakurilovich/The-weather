import { RootState } from "../index";

export const selectCurrentWeatherData = (state: RootState) => state.currentWeatherSliceReducer;
