import React from "react";

const Forecast = ({weather}) => {
  return (
    <div>{weather.forecast.forecastday.map((curelem) => {
        const{date,day}=curelem;
        console.log(curelem)
        
        return (
            <div className="justify-center flex items-center">
            <div className="mt-20 p-6 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-40">
              <h5 className="mb-2  font-poppins text-2xl font-bold tracking-tight text-white ">
              {date} 
                    </h5>
                    <h5 className="mb-2 font-poppins text-2xl font-bold tracking-tight text-white ">
                    {day.maxtemp_c}
                    </h5>
              </div>
            </div>
            </div>
   
        
        )
       }
        )}

       
    </div>
  );
};

export default Forecast;
