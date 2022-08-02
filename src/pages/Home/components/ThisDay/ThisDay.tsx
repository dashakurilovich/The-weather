import dayjs from "dayjs";
import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { useCustomSelector } from "../../../../hooks/store";
import { selectCurrentWeatherData } from "../../../../store/currentWeather/selectors";
import { Weather } from "../../../../store/types/types";
import s from './ThisDay.module.scss';

interface Props {
  weather: Weather
}

export const ThisDay = ({ weather }: Props) => {

  const currentWeather = useCustomSelector(selectCurrentWeatherData);
  const timeZoneValue = currentWeather.weather.timezone;

  const dateNow = dayjs();
  const grinvichTime = dateNow.add(new Date().getTimezoneOffset(), 'minutes');
  const timeWithTimezone = grinvichTime.add(timeZoneValue, 'seconds').format('HH : mm')

  return (
    <header className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.this_temp}>{Math.floor(weather.main.temp)}°C</div>
          <div className={s.this_day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector icon='sun' />
      </div>
      <div className={s.bottom_block}>
        <div className={s.this_time}>
          Время: <span> {timeWithTimezone}</span>
        </div>
        <div className={s.this_city}>
          Город: <span> {weather.name}</span>
        </div>
      </div>
    </header>
  )
}