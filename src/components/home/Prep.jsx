import React from "react";
import google from "../../assets/google.svg";
import oracle from "../../assets/oracle.svg";
import paypal from "../../assets/paypal.svg";
import gamma from "../../assets/gammaprep.png";
const Prep = () => {
  return (
    <div className="pb-24">
      <div className="text-center mb-20">
        <div className="flex gap-2 justify-center">
          <h1
            className="text-3xl font-black text-gray-700 md:text-4xl p-2"
            id="services"
          >
            Our expert developers are trained by 
          </h1>
          <img src={gamma} alt="gamma" className="w-38 h-14 mt-1"/>
        </div>
        <p className="text-xl pt-2 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
          Mentored by Google, Oracle, and PayPal engineers
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#006b9f] inline-flex"></div>
        </div>
      </div>
      <div className="block flex-wrap px-10 md:px-0 md:flex">
        <div className="p-2 pt-8 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-[#006b9f] mb-5 flex-shrink-0">
            <img src={google} className="w-24 h-24" alt="logo" />
          </div>
        </div>
        <div className="p-2 pt-8 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-[#006b9f] mb-5 flex-shrink-0">
            <img src={oracle} className="w-24 h-24" alt="logo" />
          </div>
        </div>
        <div className="p-2 pt-8 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-[#006b9f] mb-5 flex-shrink-0">
            <img src={paypal} className="w-24 h-24" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prep;
