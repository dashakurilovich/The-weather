import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useCustomSelector } from '../../../../hooks/store';
import { selectForecastWeatherData } from '../../../../store/forecastWeather/selectors';
import s from './Days.module.scss';
import { Tabs } from './Tabs';

// export interface Day {
//   day: string,
//   day_info: string,
//   icon_id: string,
//   temp_day: string,
//   temp_night: string,
//   info: string,
// }

const getUniqDays = (forecast: any) => forecast.reduce((uniqDays: any, currentWeather: any) => {

  const formattedDate = dayjs(currentWeather.dt * 1000).format("MM.DD.YYYY")

  if (uniqDays.includes(formattedDate)) {
    return uniqDays
  }

  return [...uniqDays, formattedDate]
}, [])

const Forecast = () => {

  const forecastWeatherData = useCustomSelector(selectForecastWeatherData)
  const uniqDays = getUniqDays(forecastWeatherData.list)
  const [selectedDay, setSelectedDay] = useState(uniqDays[0] || null)


  return (
    <div>
      {uniqDays?.length && <Tabs days={uniqDays} selectedDay={selectedDay} />}
      {/* <ForecastInfo /> */}
    </div>

  )
}

export default Forecast;