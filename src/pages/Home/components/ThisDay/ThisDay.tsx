import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../store/types/types";
import s from './ThisDay.module.scss';

interface Props {
  weather: Weather
}

export const ThisDay = ({ weather }: Props) => {
  return (
    <header className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.this_temp}>{Math.floor(weather.main.temp)}°C</div>
          <div className={s.this_day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom_block}>
        <div className={s.this_time}>
          Время : <span> 21:54</span>
        </div> 
        <div className={s.this_city}>
          Город : <span> Батуми</span>
        </div>
      </div>
    </header>
  )
}