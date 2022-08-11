import dayjs from 'dayjs';
import React from 'react';
import s from './Days.module.scss';

interface TabsProps {
  days: Array<string>
  selectedDay: string | null
}

const getFormattedDays = (dates: Array<string>) => {
  return dates.map((date) => {
    const isToday = dayjs(date).isToday()

    if (isToday) {
      return 'Сегодня'
    }
    const isTomorrow = dayjs(date).isTomorrow()

    if (isTomorrow) {
      return 'Завтра'
    }

    const dayWeek = dayjs(date, 'DD.MM.YYYY').format('dddd')

    return dayWeek.charAt(0).toUpperCase() + dayWeek.slice(1)
  })
}


export const Tabs = ({ days, selectedDay }: TabsProps) => {

  const formattedDays = getFormattedDays(days)
  return (
    <div className={s.tabs}>
      <div className={s.tabsWrapper}>
        {formattedDays.map((day) => {
          const isSelected = selectedDay === day

          return (
            <div className={`${s.tab} ${isSelected ? s.selectedTab : ' '}`} key={day}>{day}</div>
          )
        })}
      </div>
    </div>
  )
}