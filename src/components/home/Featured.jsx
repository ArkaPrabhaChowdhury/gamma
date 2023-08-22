import React from "react";
import dailyhunt from "../../assets/dailyhunt.png";
import firstviralpost from "../../assets/firstviralpostlogo.png";
import tumblr from "../../assets/tumblr.png";
import startupnama from "../../assets/startupnama.png";
const Featured = () => {
  return (
    <div className="pb-24 pt-10">
      <div className="text-center mb-20 ">
        <div className="block gap-2 justify-center md:flex">
          <h1
            className="text-3xl font-black text-gray-700 md:text-4xl p-2"
            id="services"
          >
            Featured in
          </h1>
        </div>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#006b9f] inline-flex"></div>
        </div>
      </div>
      <div className="block flex-wrap px-10 md:px-0 md:flex">
        <div className="p-2 pt-9 md:w-1/4 flex flex-col text-center items-center">
          <div className="w-28 h-28 inline-flex items-center justify-center rounded-full text-[#006b9f] mb-5 md:mt-2 flex-shrink-0">
            <a href="http://dhunt.in/OIIIT" target="_blank"><img src={dailyhunt} className="w-28 h-28" alt="logo" /></a>
          </div>
        </div>
        <div className="p-2 pt-12 md:w-1/4 flex flex-col text-center items-center">
          <div className="w-48 h-20 inline-flex items-center justify-center rounded-full text-[#006b9f] mb-5 flex-shrink-0">
            <a href="https://www.firstviralpost.com/2023/08/gammainnovationscom-transforming-it.html" target="_blank"><img src={firstviralpost} className="w-48 h-20" alt="logo" /></a>
          </div>
        </div>
        <div className="p-2 pt-8 md:w-1/4 flex flex-col text-center items-center">
          <div className="w-28 h-28 inline-flex items-center justify-center rounded-full text-[#006b9f] mb-5 flex-shrink-0">
           <a href="https://www.tumblr.com/prwizard/726235358372724736/gammainnovationscom-transforming-it-services?source=share" target="_blank"><img src={tumblr} className="w-28 h-28" alt="logo" /></a>
          </div>
        </div>
        <div className="p-2 pt-16 md:w-1/4 flex flex-col text-center items-center">
          <div className="w-48 h-18 inline-flex items-center justify-center rounded-full text-[#006b9f] mb-5 flex-shrink-0">
            <a href="https://www.startupnama.com/2023/08/gammainnovationscom-transforming-it.html" target="_blank"><img src={startupnama} className="w-48 h-18" alt="logo" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
