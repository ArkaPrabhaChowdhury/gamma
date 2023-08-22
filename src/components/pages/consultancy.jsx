import React from "react";
import NavBar from "./../home/NavBar";
import Contact from "./../home/Contact";
import Bottom from "./../home/Bottom";
import Portfolio from "./../home/Portfolio";
import { Helmet } from "react-helmet";
import ContactForm from "../ContactForm";
import { PiStrategyBold } from "react-icons/pi";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { GiGrowth } from "react-icons/gi";
const ConsultantPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gamma Innovations - Tech Consultancy Services</title>
        <meta
          name="description"
          content="Get expert tech consultancy services from Gamma Innovations. Stay ahead with cutting-edge technologies and strategic guidance to drive innovation and business success!"
        />
        <meta
          name="keywords"
          content="Gamma Innovations, tech consultancy, website development, app development, software development, digital marketing, design"
        />
        <link
          rel="canonical"
          href="https://www.gammainnovations.com/tech-consultancy"
        />
        <meta
          property="og:title"
          content="Gamma Innovations - Tech Consultancy Services"
        />
        <meta
          property="og:description"
          content="Get expert tech consultancy services from Gamma Innovations. Stay ahead with cutting-edge technologies and strategic guidance to drive innovation and business success!"
        />
        <meta
          property="og:image"
          content="https://www.gammainnovations.com/gamma.svg"
        />
        <meta
          property="og:url"
          content="https://www.gammainnovations.com/tech-consultancy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gamma Innovations" />
      </Helmet>
      <NavBar service={true} />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 md:py-24 mx-auto">
          <div className="text-center md:mb-20">
            <h1 className="text-3xl font-black text-gray-700 md:text-4xl p-2">
              Tech Consultancy Services
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
              Strategic technology consulting to help businesses optimize their
              operations and achieve their goals.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-[#006b9f] inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap lg:px-24 sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="md:w-1/2 order-2 md:order-1 pt-12 md:pt-0">
              <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                  <PiStrategyBold className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Technology Strategy
                  </h2>
                  <p className="leading-relaxed text-base">
                    Develop a comprehensive technology strategy aligned with
                    your business objectives and future growth plans.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                 <GiGrowth className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    IT Infrastructure Planning
                  </h2>
                  <p className="leading-relaxed text-base">
                    Assess and design scalable and secure IT infrastructure to
                    support your business operations and growth.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                  <LiaDigitalTachographSolid className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Digital Transformation
                  </h2>
                  <p className="leading-relaxed text-base">
                    Guide your organization through a successful digital
                    transformation journey by leveraging emerging technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 pt-12 px-6 md:px-0">
              <h1 className="font-bold text-2xl text-center pb-16">
                Unlock Your Potential with a FREE 45-Minute Consultation Call!
                🚀📞
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

export default ConsultantPage;
