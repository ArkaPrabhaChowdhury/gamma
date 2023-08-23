import React from "react";
import NavBar from "./../home/NavBar";
import Contact from "./../home/Contact";
import Bottom from "./../home/Bottom";
import Portfolio from "./../home/Portfolio";
import { Helmet } from "react-helmet";
import ContactForm from "../ContactForm";
import Featured from "../home/Featured";
import {
  TbBrandReactNative,
  TbDatabaseEdit,
  TbDeviceTabletCog,
} from "react-icons/tb";
import app1 from "../../assets/work2.png";
import app2 from "../../assets/app2.png";
import app3 from "../../assets/app3.png";
const AppDevelopmentPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gamma Innovations - App Development Services</title>
        <meta
          name="description"
          content="Build cutting-edge mobile apps with Gamma Innovations' expert app development services. From concept to launch, we deliver innovative and user-friendly apps tailored to your business needs!"
        />
        <meta
          name="keywords"
          content="Gamma Innovations, app development, website development, software development, digital marketing, tech consultancy, design"
        />
        <link
          rel="canonical"
          href="https://www.gammainnovations.com/app-development"
        />
        <meta
          property="og:title"
          content="Gamma Innovations - App Development Services"
        />
        <meta
          property="og:description"
          content="Build cutting-edge mobile apps with Gamma Innovations' expert app development services. From concept to launch, we deliver innovative and user-friendly apps tailored to your business needs!"
        />
        <meta
          property="og:image"
          content="https://www.gammainnovations.com/gamma.svg"
        />
        <meta
          property="og:url"
          content="https://www.gammainnovations.com/app-development"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gamma Innovations" />
      </Helmet>
      <NavBar service={true} />
      <section className="text-gray-600 body-font" id="services">
        <div className="container px-5 py-6 md:py-24 mx-auto">
          <div className="text-center md:mb-20">
            <h1 className="text-3xl font-black text-gray-700 md:text-4xl p-2">
              App Development
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
              Harnessing the Power of Kotlin, Java, Swift, and Firebase for
              Innovative App Development
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-[#006b9f] inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap lg:px-24 sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="md:w-1/2 order-2 md:order-1 pt-12 md:pt-0">
              <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                  <TbDeviceTabletCog className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Mobile App Development
                  </h2>
                  <p className="leading-relaxed text-base">
                    Building Innovative Mobile Applications using Kotlin, Java,
                    and Swift
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                  <TbBrandReactNative className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Cross-Platform Development
                  </h2>
                  <p className="leading-relaxed text-base">
                    Creating Cross-Platform Apps using React Native, Flutter,
                    and Xamarin
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                  <TbDatabaseEdit className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Backend Development
                  </h2>
                  <p className="leading-relaxed text-base">
                    Building Robust Backend Systems using Node.js, Express, and
                    Firebase
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 pt-6 px-6 md:px-0">
              <h1 className="font-bold text-2xl text-center pb-16">
              Schedule a free 30-minute strategy call with our experts! 🎨📞
              </h1>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <div>
        <section class="text-gray-600 body-font bg-stone-100">
          <div class="container px-5 pt-12 pb-24 mx-auto" id="portfolio">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="text-3xl font-black text-gray-700 md:text-4xl p-2 ">
                Our Work
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Unlocking Creativity and Innovation - Showcasing Our Finest
                Works
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
                    src={app1}
                  />
                  <a href="https://www.freelancer.com/u/gammainnovations/portfolio/developed-creativelive-edtech-ios-app-11267197?w=f&ngsw-bypass=" target="_blank">
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
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full"
                    src={app2}
                  />
                  <a href="https://www.freelancer.com/u/gammainnovations/portfolio/developed-ludo-online-multiplayer-game-google-play-store-11267178" target="_blank">
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-[#006b9f] mb-1">
                        Application
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Ludo Online Multiplayer
                      </h1>
                      <p class="leading-relaxed">
                        {" "}
                        This virtual version of the classic Ludo brings players
                        together for thrilling multiplayer matches.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full"
                    src={app3}
                  />
                  <a href="https://www.freelancer.com/u/gammainnovations/portfolio/developed-watch-online-shopping-app-google-play-store-11267167" target="_blank">
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-[#006b9f] mb-1">
                        Application
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Watch Online Shopping
                      </h1>
                      <p class="leading-relaxed">
                        Redefines the way users experience online shopping for
                        watches, seamlessly combining style and convenience
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Featured />
      <Contact />
      <Bottom />
    </div>
  );
};

export default AppDevelopmentPage;
