import { useEffect } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectCurrentCity, selectCurrentWeatherData } from '../../store/selectors';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { Days } from './components/Days/Days';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';

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
  }, [selectedCity]);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>
      <Days />
    </div >
  )
}