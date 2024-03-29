import React from "react";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import { ThisDayItem } from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import s from './PopUp.module.scss';

interface Props {

}

export const Popup = (props: Props) => {

  const items = [{
    icon_id: 'temp',
    name: 'Температура',
    value: '20° - ощущается как 17°',
  },
  {
    icon_id: 'pressure',
    name: 'Давление',
    value: '765мм ртутного столба - нормальное',
  },
  {
    icon_id: 'precipitation',
    name: 'Осадки',
    value: 'Без осадков',
  },
  {
    icon_id: 'wind',
    name: 'Ветер',
    value: '3 м/с юго-запад - лёгкий ветер ',
  }]

  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day_temp}>20°</div>
          <div className={s.day_name}>Среда</div>
          <div className={s.img}>
            <GlobalSvgSelector icon="sun" />
          </div>
          <div className={s.day_time}>
            Время : <span> 21:54</span>
          </div>
          <div className={s.day_city}>
            Город : <span> Батуми</span>
          </div>
        </div>
        <div className={s.this_day_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close}>
          <GlobalSvgSelector icon="close" />
        </div>
      </div>
    </>
  )
}