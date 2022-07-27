import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import citySliceReducer from "./slices/CitySlice";
import currentWeatherSliceReducer from "./slices/CurrentWeatherSlices"

const rootReducer = combineReducers({
  currentWeatherSliceReducer,
  citySliceReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: ((getDefaultMiddleware) => getDefaultMiddleware
    ({
      serializableCheck: false,
    })
  )
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch']