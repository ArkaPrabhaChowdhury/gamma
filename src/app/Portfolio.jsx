import React from "react";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import Image from "next/image";
const Portfolio = () => {
  return (
    <div>
      <section class="text-gray-600 body-font bg-stone-100">
        <div class="container px-5 pt-12 pb-24 mx-auto" id="portfolio">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-3xl font-black text-gray-700 md:text-4xl p-2 ">
              Our Work
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Unlocking Creativity and Innovation - Showcasing Our Finest Works
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-[#006b9f] inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-center"
                  src="https://i.postimg.cc/QNynP0JY/work1.webp"
                />
                <a href="https://www.tremglobal.com" target='_blank'>
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-[#006b9f] mb-1">
                      Website
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      TremGlobal
                    </h1>
                    <p class="leading-relaxed">
                      Remarkable platform serves as a gateway to the dynamic
                      real estate markets of Turkey and Dubai
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={work2}
                />
                <a
                  href="https://www.freelancer.com/u/gammainnovations/portfolio/developed-creativelive-edtech-ios-app-11267197?w=f&ngsw-bypass="
                  target="_blank"
                >
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-[#006b9f] mb-1">
                      Application
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      CreativeLive EdTech
                    </h1>
                    <p class="leading-relaxed">
                      {" "}
                      IOS users can dive into a sea of creative courses and
                      workshops whenever they want with ease
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-center"
                  src={work3}
                />
                <a
                  href="https://www.freelancer.com/u/gammainnovations/portfolio/from-dubai-to-a-million-menakarts-digital-triumph-11267093?w=f&ngsw-bypass="
                  target="_blank"
                >
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-[#006b9f] mb-1">
                      Digital Marketing
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Menakart
                    </h1>
                    <p class="leading-relaxed">
                      Through our expert digital advertising strategies,
                      Menakart soared to a million-dollar sales milestone
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
