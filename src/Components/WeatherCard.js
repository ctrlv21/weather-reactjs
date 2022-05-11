import React, { useState } from "react";
// import { WiDaySnow } from "react-icons/wi";

const WeatherCard = ({ weather }) => {
  const [val, setVal] = useState(false);
  const[dae,setDate]= useState('')
  const onclick = ({date}) => {
    setVal(true);
    setDate(date);
    console.log(dae)

  };
const onReset=()=>{
  setVal(false)
}
  return (
    <div>
      <div className="justify-center flex items-center">
        <div className="mt-20 p-6 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="grid grid-cols-6 gap-0">
            <div>
              <h5 className="mb-2  font-poppins text-2xl font-bold tracking-tight text-white ">
                {weather.location.name}
              </h5>
              <img src={weather.current.condition.icon} alt="" />
            </div>
            <div className="flex-col  ">
              <div className="flex flex-col">
                <p className="flex text-white font-poppins text-2xl pl-36 box-border w-60">
                  {weather.current.temp_c} ˚C
                </p>
                <p className="flex text-gray-100 font-poppins text-xl pl-36 box-border w-60">
                  {weather.current.condition.text}
                </p>
              </div>

              <p className="flex pt-1 text-gray-100 font-poppins text-sm pl-32 box-border w-60">
                <span className="px-4">
                  {weather.forecast.forecastday[0].day.maxtemp_c}&deg;
                </span>
                <span className="px-4">
                  {weather.forecast.forecastday[0].day.mintemp_c}&deg;
                </span>
              </p>
            </div>
          </div>
          <h1 className="font-poppins text-2xl mt-6 text-white">Forecast</h1>
          <div className="flex flex-wrap md:flex md:flex-nowrap">
            {weather.forecast.forecastday.map((curelem) => {
              const { date, day } = curelem;
              return (
                <div className="mt-5">
                  <button
                    className="flex text-white font-poppins text-xl box-border w-60"

                    onClick={() => onclick({date})}
                  >
                    {date}
                  </button>

                  <div className="box-border h-10 w-10">
                    <img src={day.condition.icon} alt="" />
                  </div>
                  <p className="flex mt-2 text-gray-100 font-poppins text-sm  box-border w-60">
                    {day.maxtemp_c} ˚C
                  </p>
                  <p className="flex mt-1 text-gray-100 font-poppins text-sm box-border w-60">
                    {day.mintemp_c} ˚C
                  </p>
                </div>
              );
            })}
          </div>
          <div>
            {weather.forecast.forecastday.map((curlem) => {
              const { date, hour } = curlem;
             

              return (
        val && dae===date?
                <div className="mt-5">
                  <div className="text-gray-100 font-poppins text-xl">24HR Forecast</div>

                  <div className="flex flex-col mt-2 text-gray-100 font-poppins text-sm  box-border w-60">
                    {hour.map((ours) => {
                      return (
                        <div className="grid grid-cols-2 gap-14">
                          <div>{ours.time}</div>
                          <div>{ours.temp_c} ˚C</div>
                        </div>
                      );
                    })}
                  </div>
                </div> :" "
              );
            })}
            <button
                    className="mt-9 text-center text-black font-poppins text-xl box-border w-44 bg-[#E3F4FE] rounded-3xl"
onClick={()=>onReset()}
                  >
                    Close Forecast
                  </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
