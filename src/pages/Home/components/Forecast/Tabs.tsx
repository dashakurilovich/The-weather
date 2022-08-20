import dayjs from 'dayjs';
import React from 'react';
import s from './Days.module.scss';

interface TabsProps {
  days: Array<string>
  selectedDay: string | null
  setSelectedDay: (day: string) => void
}

const getFormattedDay = (date: string) => {
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
}


export const Tabs = ({ days, selectedDay, setSelectedDay }: TabsProps) => {

  return (
    <div className={s.tabs}>
      <div className={s.tabsWrapper}>
        {days.map((day) => {
          const isSelected = selectedDay === day
          const formattedDay = getFormattedDay(day)

          return (
            <div className={`${s.tab} ${isSelected ? s.selectedTab : ' '}`} onClick={() => setSelectedDay(day)} key={day}>{formattedDay}</div>
          )
        })}
      </div>
    </div>
  )
}