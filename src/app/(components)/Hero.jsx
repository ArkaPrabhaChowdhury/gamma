"use client"
import React from "react";
import TypewriterComponent from "typewriter-effect";
import hero from "./assets/hero.jpg";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-stone-100 h-screen">
        <div className="container mx-auto flex px-12 py-36 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="block gap-2">
              <p class="sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
                Unlock your digital potential with{" "}
              </p>
              <p className="text-[#006b9f] font-bold text-5xl">
                Gamma Innovations
              </p>
            </div>
            <div className="block mt-10 gap-2 md:flex md:pt-0">
              <p className="mb-8 leading-relaxed text-2xl">Your visionary gateway to</p>
              <div className="mb-8 leading-relaxed text-2xl font-bold italic">
              <TypewriterComponent
                  options={{
                    strings: [
                      "captivating websites",
                      "powerful apps",
                      "customized software",
                      "digital marketing",
                      "stunning designs",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 20,
                    delay: 20,
                  }}
                />
              </div>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src="https://i.postimg.cc/MH9CnSCy/hero.jpg" width={500}
      height={500} alt="Developers writing code"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
