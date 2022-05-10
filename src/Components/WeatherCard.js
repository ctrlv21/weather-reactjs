import React from "react";
// import { WiDaySnow } from "react-icons/wi";

const WeatherCard = ({ weather }) => {
    // console.log(weather);
  return (
    <div>
      <div
        className="justify-center flex items-center
        "
      >
        <form
          action="/"
          method="get"
          className=" rounded-3xl mt-14  bg-[#E3F4FE] font-poppins  box-border h-10 w-72 text-center"
        >
          <input
            type="text"
            id="header-search"
            placeholder="Search City"
            name="s"
            className="mt-2 rounded-3xl box-border w-5/12 bg-[#E3F4FE] text-black placeholder-gray"
          />
          &nbsp;&nbsp;
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="justify-center flex items-center">
        <div className="mt-20 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <h5 className="mb-2  font-poppins text-2xl font-bold tracking-tight text-white ">
                {weather.location.name}
              </h5>
              <img src={weather.current.condition.icon} alt="" />
            </div>
            <div>
              <p className="flex text-white font-poppins text-2xl pl-44 box-border w-60">
                { weather.current.temp_c} ˚C
              </p>
              <p className="flex text-gray-100 font-poppins text-xl pl-44 box-border w-60">
                {weather.current.condition.text}
              </p>
              {MinMax(24, 19)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function MinMax(min, max) {
  return (
    <p3 className="flex pt-1 text-gray-100 font-poppins text-sm pl-40 box-border w-60">
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </p3>
  );
}
export default WeatherCard;
