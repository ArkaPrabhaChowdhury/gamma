import React from "react";
import node from "../assets/nodejs.svg";
import react from "../assets/react.svg";
import mongo from "../assets/mongo.svg";
import php from "../assets/php.svg";
import wordpress from "../assets/wordpress.svg";
import java from "../assets/java.svg";

const TechStack = () => {
  return (
    <div className="pb-24">
      <div className="text-center mb-20">
        <h1 className="text-3xl font-black text-gray-700 md:text-4xl p-2" id="services">
          Tech Stack
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
          Tools we use to build your dream website
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#006b9f] inline-flex"></div>
        </div>
      </div>

      <div className="block flex-wrap px-10 md:px-0 md:flex">
        <div className="p-4 pt-8 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-[#006b9f] mb-5 flex-shrink-0">
            <img src={node} className="w-24 h-24" alt="logo" />
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">NodeJS</h2>
          </div>
        </div>
        <div className="p-4 pt-8 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-[#006b9f] mb-5 flex-shrink-0">
            <img src={react} className="w-24 h-24" alt="logo" />
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">ReactJS</h2>
          </div>
        </div>
        <div className="p-4 pt-8 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-[#006b9f] mb-5 flex-shrink-0">
            <img src={mongo} className="w-24 h-24" alt="logo" />
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">MongoDB</h2>
          </div>
        </div>
        <div className="p-4 pt-8 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-[#006b9f] mb-5 flex-shrink-0">
            <img src={php} className="w-24 h-24" alt="logo" />
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">PHP</h2>
          </div>
        </div>
        <div className="p-4 pt-8 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-[#006b9f] mb-5 flex-shrink-0">
            <img src={wordpress} className="w-24 h-24" alt="logo" />
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">WordPress</h2>
          </div>
        </div>
        <div className="p-4 pt-8 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-[#006b9f] mb-5 flex-shrink-0">
            <img src={java} className="w-24 h-24" alt="logo" />
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Java</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
