import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import citySliceReducer from "./selectedCity/slice";
import currentWeatherSliceReducer from "./currentWeather/slice";
import forecastWeatherSliceReducer from "./forecastWeather/slice";

const rootReducer = combineReducers({
  currentWeatherSliceReducer,
  citySliceReducer,
  forecastWeatherSliceReducer
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