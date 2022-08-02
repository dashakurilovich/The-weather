import { RootState } from "../index";

export const selectCurrentCity = (state: RootState) => state.citySliceReducer.selectedCity; 
