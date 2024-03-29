import React from "react";
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png'
import { ThisDayItem } from "./ThisDayItem";
import { Weather } from "../../../../store/types/types";

interface Props {
  weather: Weather
}

export interface Item {
  icon_id: string,
  name: string,
  value: string,
}

export const ThisDayInfo = ({ weather }: Props) => {

  const items = [{
    icon_id: 'temp',
    name: 'Температура',
    value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(weather.main.feels_like)}°`,
  },
  {
    icon_id: 'pressure',
    name: 'Давление',
    value: `${Math.floor(weather.main.pressure)} мм ртутного столба - нормальное`,
  },
  {
    icon_id: 'humidity',
    name: 'Влажность',
    value: `${weather.main.humidity} %`,
  },
  {
    icon_id: 'wind',
    name: 'Ветер',
    value: `${Math.floor(weather.wind.speed)} м/с юго-запад - лёгкий ветер `,
  }]

  return (
    <div className={s.this_day_info}>
      <div className={s.this_day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={s.cloud_img} src={cloud} alt="облако" />
    </div>
  )
}