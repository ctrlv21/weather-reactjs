import React, { useCallback, useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
// const api_key = "d08476af38254d32a77141527220905";
const FetchWeather = () => {
  const [{weather}, setWeather] = useState({})
  const FetchWeather = useCallback( async () => {
    try {
      const response = await fetch(
        'http://api.weatherapi.com/v1/current.json?key=d08476af38254d32a77141527220905&q=London&aqi=no'
      );
      console.log(response)
      setWeather(await response.json());
    } catch (error) {
      console.log(error);
    }
  },[setWeather])
  useEffect(() => {
    
  FetchWeather()

}, [FetchWeather]);
  return( <WeatherCard weather={weather} />)
};

export default FetchWeather;
