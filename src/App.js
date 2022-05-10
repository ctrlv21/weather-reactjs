// import FetchWeather from "./Components/FetchWeather";
import TitleBar from "./Components/TitleBar";
import WeatherCard from "./Components/WeatherCard";
import React, { useCallback, useEffect, useState } from "react";




function App() {
  const [weather, setWeather] = useState([{}])
  // const FetchWeather= async ()=>{
  //   try {
  //     const response = await fetch("http://api.weatherapi.com/v1/current.json?key=d08476af38254d32a77141527220905&q=London&aqi=no");
  //     console.log(response);
  //     response.json().then((response)=>{
  //       setWeather(response);
  //     })
  //     console.log(weather);
  //   } catch (error) {
  //     console.log('my error is'+error)
  //   }
  // }

  // useEffect(()=>{
  //   FetchWeather();
  // },[]);
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
  },[])
  useEffect(() => {
  FetchWeather()
},[FetchWeather]);
  return (
    <div
      className="bg-white min-h-screen
    "
    >
      <TitleBar />
       <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
