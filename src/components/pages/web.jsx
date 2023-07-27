import React from "react";
import NavBar from "./../home/NavBar";
import Contact from "./../home/Contact";
import Bottom from "./../home/Bottom";
import Portfolio from "./../home/Portfolio";
import TechStack from "../TechStack";
import { Helmet } from "react-helmet";

const WebDevelopmentPage = () => {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Gamma Innovations - Web Development and Transformative Technology
          Solutions
        </title>
        <meta
          name="description"
          content="Get your website built in the most creative and efficient manner with Gamma Innovations' expert web development services. Empower your business with transformative technology solutions today!"
        />
        <meta
          name="keywords"
          content="Gamma Innovations, web development, app development, software development, digital marketing, tech consultancy"
        />
        <link
          rel="canonical"
          href="https://www.gammainnovations.com/web-development"
        />
        <meta
          property="og:title"
          content="Gamma Innovations - Web Development and Transformative Technology Solutions"
        />
        <meta
          property="og:description"
          content="Get your website built in the most creative and efficient manner with Gamma Innovations' expert web development services. Empower your business with transformative technology solutions today!"
        />
        <meta
          property="og:image"
          content="https://www.gammainnovations.com/gamma.svg"
        />
        <meta
          property="og:url"
          content="https://www.gammainnovations.com/web-development"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gamma Innovations" />
      </Helmet>
      <NavBar service={true} />
      <section className="text-gray-600 body-font pb-12">
        <div className="container px-5 py-12 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-3xl font-black text-gray-700 md:text-4xl p-2">
              Web Development Services
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
              Crafting Dynamic Websites with React, Angular, Node.js, PHP, and
              WordPress
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Custom Website Development
                </h2>
                <p className="leading-relaxed text-base">
                  We create custom websites tailored to your unique needs using
                  the latest technologies and frameworks such as React, Angular,
                  and Node.js. Our websites are designed to be responsive,
                  user-friendly, and visually appealing.
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
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  E-commerce Development
                </h2>
                <p className="leading-relaxed text-base">
                  We specialize in building robust and scalable e-commerce
                  solutions using platforms like Shopify, WooCommerce, and
                  Magento. From product catalog management to secure payment
                  integration, we've got you covered.
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
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Content Management Systems (CMS)
                </h2>
                <p className="leading-relaxed text-base">
                  We leverage popular CMS platforms such as WordPress to create
                  easy-to-manage websites. With a user-friendly interface and
                  powerful features, you'll have full control over your
                  website's content, making updates and modifications a breeze.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TechStack />
      <Portfolio />
      <Contact />
      <Bottom />
    </div>
  );
};

export default WebDevelopmentPage;
