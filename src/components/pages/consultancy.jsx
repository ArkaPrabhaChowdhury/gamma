import React from 'react';
import NavBar from './../home/NavBar';
import Contact from './../home/Contact';
import Bottom from './../home/Bottom';
import Portfolio from './../home/Portfolio';
import { Helmet } from "react-helmet";
const ConsultantPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gamma Innovations - Tech Consultancy Services</title>
        <meta name="description" content="Get expert tech consultancy services from Gamma Innovations. Stay ahead with cutting-edge technologies and strategic guidance to drive innovation and business success!" />
        <meta name="keywords" content="Gamma Innovations, tech consultancy, website development, app development, software development, digital marketing, design" />
        <link rel="canonical" href="https://www.gammainnovations.com/tech-consultancy" />
        <meta property="og:title" content="Gamma Innovations - Tech Consultancy Services" />
        <meta property="og:description" content="Get expert tech consultancy services from Gamma Innovations. Stay ahead with cutting-edge technologies and strategic guidance to drive innovation and business success!" />
        <meta property="og:image" content="https://www.gammainnovations.com/gamma.svg" />
        <meta property="og:url" content="https://www.gammainnovations.com/tech-consultancy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gamma Innovations" />
      </Helmet>
      <NavBar service={true}/>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
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
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-9v-2c0-5-8-9-8-9s-8 4-8 9v2c0 5 8 9 8 9z"></path>
                  <circle cx="12" cy="8" r="3"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Technology Strategy
                </h2>
                <p className="leading-relaxed text-base">
                  Develop a comprehensive technology strategy aligned with your
                  business objectives and future growth plans.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20 4h-7L7 12v10h10"></path>
                  <path d="M14 16l-4 4m4-4V5"></path>
                </svg>
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
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 17s-8-4-8-9V2h16v6s-4 2-8 2-8-2-8-2v8a6 6 0 008 6z"></path>
                </svg>
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
        </div>
      </section>
      <Portfolio/>
      <Contact/>
      <Bottom/>
    </div> 
  );
};

export default ConsultantPage;
