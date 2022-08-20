import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useCustomSelector } from '../../../../hooks/store';
import { selectForecastWeatherData } from '../../../../store/forecastWeather/selectors';
import { Card } from './Card';
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

const getForecastByDay = (forecast: any, day: string) =>
  forecast.reduce((forecastsSelectedDay: any, currentForecast: any) => {
    const date = dayjs(day)
    const forecastDate = dayjs(currentForecast.dt * 1000)


    console.log('forecastDate', forecastDate.toString());

    if (date.isSame(forecastDate, "day")) {
      return [...forecastsSelectedDay, currentForecast]
    }

    return forecastsSelectedDay
  }, [])



const Forecast = () => {

  const forecastWeatherData = useCustomSelector(selectForecastWeatherData)
  const uniqDays = getUniqDays(forecastWeatherData.list)


  const [selectedDay, setSelectedDay] = useState(uniqDays[0] || null)

  const forecastSelectedDay = forecastWeatherData.list && selectedDay ? getForecastByDay(forecastWeatherData.list, selectedDay) : null

  useEffect(() => {
    if (uniqDays?.length && !selectedDay) {
      setSelectedDay(uniqDays[0])
    }
  }, [selectedDay, uniqDays])


  return (
    <div>
      {uniqDays && <Tabs days={uniqDays} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />}
      {/* <ForecastInfo /> */}
      <div className={s.forecastContainer}>
        {forecastSelectedDay && forecastSelectedDay.map(( forecast : any) => {

          return <Card weather={forecast} key={forecast.dt} />
        })}
      </div>

    </div>

  )
}

export default Forecast;