import React from "react";
import TypewriterComponent from "typewriter-effect";
import hero from "../../assets/hero.jpg";
const Hero = () => {
  return (
    <div>
      <section class="text-gray-600 body-font bg-stone-100 h-screen" id="home">
        <div class="container mx-auto flex px-12 py-36 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="block gap-2">
              <p class="sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
                Unlock your digital potential with{" "}
              </p>
              <p className="text-[#006b9f] font-bold text-5xl">
                Gamma Innovations
              </p>
            </div>
            <div className="block mt-10 gap-2 md:flex md:pt-0">
              <p className="mb-8 leading-relaxed text-2xl">Your visonary gateway to</p>
              <p className="mb-8 leading-relaxed text-2xl font-bold italic">
                {" "}
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
              </p>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={hero}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
