import TitleBar from "./Components/TitleBar";
import WeatherCard from "./Components/WeatherCard";
import React, { useCallback,useEffect, useState } from "react";
import Wave from 'react-wavify';


function App() {
  

  const [tempsearch,setTempSearch]= useState("")
  const [search,setSearch]= useState("");

  const handleSubmit =(event)=>{
    event.preventDefault();
    setSearch(tempsearch);
  }
  const [weather, setWeather] = useState(null);
  const FetchWeather = useCallback(async () => {

    if(search!=="") { try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=d08476af38254d32a77141527220905&q=${search}&aqi=no&days=5`
        );
        setWeather(await response.json());
      } catch (error) {
        console.log(error);
      }}
    
  
    });
  useEffect(() => {
    FetchWeather();
  }, [search])
  return (
    
    <div
      className="bg-white min-h-screen 
    "
    >
      <TitleBar />
      <div  className=" justify-center flex items-center" >
      <form 
        className=" mt-20 pl-7 pr-7 rounded-3xl box-borded w-72 h-9 justify-center flex items-center font-poppins bg-[#E3F4FE]
        "
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          id="header-search"
          placeholder="Search City"
          name="city"
          value={tempsearch}
          onChange={(e)=>setTempSearch(e.target.value)}
        
          className=" rounded-3xl  w-64 bg-[#E3F4FE] text-black placeholder-gray pl-2"
        />
        &nbsp;&nbsp;
        <button type="submit">Search</button>
      </form>
      </div>
      {weather === null  ? "" : <WeatherCard weather={weather} />}
      <Wave fill='#1C9CF6 ' mask="url(#mask)">
        <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="0" stopColor="white" />
          <stop offset="0.5" stopColor="black" />
        </linearGradient>
        <mask id="mask">
          <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)"  />
        </mask>
      </defs>
  </Wave>
    </div>
  );
}

export default App;