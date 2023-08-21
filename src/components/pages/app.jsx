import React from "react";
import NavBar from "./../home/NavBar";
import Contact from "./../home/Contact";
import Bottom from "./../home/Bottom";
import Portfolio from "./../home/Portfolio";
import { Helmet } from "react-helmet";
import ContactForm from "../ContactForm";
import {TbBrandReactNative, TbDatabaseEdit, TbDeviceTabletCog} from "react-icons/tb"
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
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
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
                  Creating Cross-Platform Apps using React Native, Flutter, and
                  Xamarin
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
              <ContactForm/>
            </div>
          </div>
        </div>
      </section>
      <Portfolio />
      <Contact />
      <Bottom />
    </div>
  );
};

export default AppDevelopmentPage;
