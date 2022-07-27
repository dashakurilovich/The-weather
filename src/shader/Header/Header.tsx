import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Select from 'react-select'
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { cities } from "../../constans/cities";
import { Theme } from "../../contex/ThemeContext";
import { useCustomDispatch } from "../../hooks/store";
import { useTheme } from "../../hooks/useTheme";
import { selectCurrentCity } from "../../store/selectors";
import { citySlice } from "../../store/slices/CitySlice";
import s from './Header.module.scss';

interface Props {

}
export const Header = (props: Props) => {

  const dispatch = useCustomDispatch();
  const theme = useTheme();
  const selectedCity = useSelector(selectCurrentCity)


  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#fff' : '#000',
    })
  }

  const changeSelectedCity = (newCity: any) => {
    dispatch(citySlice.actions.setSelectedCity(newCity))
  }

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}><GlobalSvgSelector icon="header-logo" /></div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}><GlobalSvgSelector icon="change_theme" /></div>
        <Select styles={colourStyles} options={cities} value={selectedCity} onChange={changeSelectedCity} />
      </div>
    </header>
  )
}