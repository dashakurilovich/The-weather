import { useEffect } from 'react';

import Forecast from './components/Forecast';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/currentWeather/thunks';
import { fetchForecastWeather } from '../../store/forecastWeather/thunks';
import s from './Home.module.scss';
import { selectCurrentCity } from '../../store/selectedCity/selectors';
import { selectCurrentWeatherData } from '../../store/currentWeather/selectors';

interface Props {

}

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  const selectedCity = useCustomSelector(selectCurrentCity)


  const { weather } = useCustomSelector(
    selectCurrentWeatherData
  )
  useEffect(() => {
    dispatch(fetchCurrentWeather(selectedCity.label))
    dispatch(fetchForecastWeather(selectedCity.label))
  }, [dispatch, selectedCity]);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>
      <Forecast />
    </div >
  )
}