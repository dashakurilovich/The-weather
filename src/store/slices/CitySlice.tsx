
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import React from "react";
import { cities } from "../../constans/cities";

export type CitySlice = {
  selectedCity: {
    label: string,
    value: string
  }
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