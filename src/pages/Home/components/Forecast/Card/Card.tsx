import dayjs from 'dayjs';
import React from 'react';
import { GlobalSvgSelector } from '../../../../../assets/icons/global/GlobalSvgSelector';
import s from './Card.module.scss';



export const Card = ({ weather }: any) => {

  const formattedTime = dayjs(weather.dt * 1000).format("HH:mm")
  const formattedDate = dayjs(weather.dt * 1000).format("DD MMM")

  return (
    <div className={s.card}>
      <div>
        {formattedTime}
      </div>
      <div>
        {formattedDate}
      </div>
      {/* <div className={s.day}>{forecast.day}</div>
      <div className={s.day_info}>{forecast.day_info}</div>
      <div className={s.img}>
        <GlobalSvgSelector icon={forecast.icon_id} />
      </div>
      <div className={s.temp_day}>{forecast.temp_day}</div>
      <div className={s.temp_night}>{forecast.temp_night}</div>
      <div className={s.info}>{forecast.info}</div> */}
    </div>
  )
}