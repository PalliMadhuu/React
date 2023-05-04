import React, { FC } from 'react';
import './WeatherComp.css';
import { axiosInstace } from '../Interceptors/Interceptors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface WeatherCompProps {}

const WeatherComp: FC<WeatherCompProps> = () => {
  
    function onWeatherClick()
    {
               axiosInstace.get('/weather',{params:{q:'vijayawada',appid:'c26640003bd6f64027aff690ed140ab9'}})
               .then(response => {
                console.log(response.data)
                toast(`Wind Speed : ${response.data.wind.speed}`);
                toast(`Degrees : ${response.data.wind.deg}`);

              })
              .catch(error => {
                console.log(error);
              });
    }
    return(
  <div className="WeatherComp" data-testid="WeatherComp">
    <button type="submit" onClick={onWeatherClick}>Get Weather</button>

  </div>
  )
  
}

export default WeatherComp;
