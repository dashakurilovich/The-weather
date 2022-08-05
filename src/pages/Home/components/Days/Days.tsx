import React from 'react';
import { useCustomSelector } from '../../../../hooks/store';
import { Card } from './Card';
import s from './Days.module.scss';
import { Tabs } from './Tabs';

interface Props {

}

export interface Day {
  day: string,
  day_info: string,
  icon_id: string,
  temp_day: string,
  temp_night: string,
  info: string,
}

export const Days = (props: Props) => {

  // const  forecastWeatherData  = useCustomSelector
  const days: Day[] = [
    {
      day: "Сегодня",
      day_info: '28 авг',
      icon_id: 'sun',
      temp_day: '+18°',
      temp_night: '+15°',
      info: 'Ясно'
    },
    {
      day: "Завтра",
      day_info: '29 авг',
      icon_id: 'small_rain_sun',
      temp_day: '+18°',
      temp_night: '+15°',
      info: 'Небольшой дождь, солнечно '
    },
    {
      day: "Ср",
      day_info: '30 авг',
      icon_id: 'small_rain',
      temp_day: '+18°',
      temp_night: '+15°',
      info: 'Небольшой дождь'
    },
    {
      day: "Чт",
      day_info: '31 авг',
      icon_id: 'mainly_cloud',
      temp_day: '+18°',
      temp_night: '+15°',
      info: 'Облачно'
    },
    {
      day: "Пт",
      day_info: '31 авг',
      icon_id: 'rain',
      temp_day: '+18°',
      temp_night: '+15°',
      info: 'Дождь'
    },
    {
      day: "Сб",
      day_info: '31 авг',
      icon_id: 'mainly_cloud',
      temp_day: '+18°',
      temp_night: '+15°',
      info: 'Облачно'
    },
    {
      day: "Вс",
      day_info: '1 сент',
      icon_id: 'mainly_cloud',
      temp_day: '+18°',
      temp_night: '+15°',
      info: 'Облачно'
    },

  ]

  return (
  
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((day: Day) => (
          <Card day={day} key={day.day} />))}
      </div>
    </>
  )
}