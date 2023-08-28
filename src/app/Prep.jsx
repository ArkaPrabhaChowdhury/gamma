import React from "react";
import google from "./assets/google.svg";
import oracle from "./assets/oracle.svg";
import paypal from "./assets/paypal.svg";
import gamma from "./assets/gammaprep.png";
import microsoft from "./assets/microsoft.svg";
import Image from "next/image";
const Prep = () => {
  return (
    <div className="pb-24 pt-10 bg-white">
      <div className="text-center mb-20 ">
        <div className="block gap-2 justify-center md:flex">
          <h1
            className="text-3xl font-black text-gray-700 md:text-4xl p-2"
            id="services"
          >
            Our expert developers are trained by 
          </h1>
          <a href="https://gammaprep.com" target="_blank"><Image src={gamma} alt="gamma" className="w-36 h-12 m-4 mx-auto md:m-0 md:mt-2"/></a>
        </div>
        <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mt-2 text-gray-500">
          Mentored by Google, Oracle, Microsoft and PayPal engineers
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#006b9f] inline-flex"></div>
        </div>
      </div>
      <div className="block flex-wrap px-10 md:px-0 md:flex">
        <div className="p-2 pt-9 md:w-1/4 flex flex-col text-center items-center">
          <div className="w-14 h-14 inline-flex items-center justify-center rounded-full text-[#006b9f] mb-5 md:mt-2 flex-shrink-0">
            <Image src={google} className="w-18 h-18" alt="logo" />
          </div>
        </div>
        <div className="p-2 pt-8 md:w-1/4 flex flex-col text-center items-center">
          <div className="w-24 h-24 inline-flex items-center justify-center rounded-full text-[#006b9f] mb-5 flex-shrink-0">
            <Image src={oracle} className="w-24 h-24" alt="logo" />
          </div>
        </div>
        <div className="p-2 pt-6 md:w-1/4 flex flex-col text-center items-center">
          <div className="w-28 h-28 inline-flex items-center justify-center rounded-full text-[#006b9f] mb-5 flex-shrink-0">
            <Image src={microsoft} className="w-28 h-28" alt="logo" />
          </div>
        </div>
        <div className="p-2 pt-8 md:w-1/4 flex flex-col text-center items-center">
          <div className="w-26 h-26 inline-flex items-center justify-center rounded-full text-[#006b9f] mb-5 flex-shrink-0">
            <Image src={paypal} className="w-24 h-24" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prep;
