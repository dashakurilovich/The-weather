import { createSlice } from "@reduxjs/toolkit";

import { cities } from "../../constans/cities";
import { CityInfo } from "../types/types";

export type CitySlice = {
  selectedCity: CityInfo
}

const initialState: CitySlice = {
  selectedCity: cities[0]
};

export const citySlice = createSlice({
  name: 'selected_city',
  initialState,
  reducers: {
    setSelectedCity(state, action) {
      state.selectedCity = action.payload
    }
  }
})

export default citySlice.reducer;