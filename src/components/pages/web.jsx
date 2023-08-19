import React from "react";
import NavBar from "./../home/NavBar";
import Contact from "./../home/Contact";
import Bottom from "./../home/Bottom";
import Portfolio from "./../home/Portfolio";
import TechStack from "../TechStack";
import { Helmet } from "react-helmet";
import ContactForm from "../ContactForm";
import {CgShoppingCart, CgWebsite} from "react-icons/cg"
import {TbDeviceDesktopCog} from "react-icons/tb"
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
      <div className="flex flex-wrap lg:px-40">
        <div className="w-full p-4">
          <section className="text-gray-600 body-font pb-12">
            <div className="container px-5 py-12 mx-auto">
              <div className="text-center mb-20">
                <h1 className="text-3xl font-black text-gray-700 md:text-4xl p-2">
                  Web Development Services
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
                  Crafting Dynamic Websites with React, Angular, Node.js, PHP,
                  and WordPress
                </p>
                <div className="flex mt-6 justify-center">
                  <div className="w-16 h-1 rounded-full bg-[#006b9f] inline-flex"></div>
                </div>
              </div>

              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div className="md:w-1/2 order-2 md:order-1 pt-12 md:pt-0">
                  <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                      <CgWebsite className="w-10 h-10"/>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                        Custom Website Development
                      </h2>
                      <p className="leading-relaxed text-base">
                        We create tailored websites using React, Angular, and
                        Node.js. Our sites are responsive, user-friendly, and
                        visually appealing.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                      <CgShoppingCart className="w-10 h-10"/>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                        E-commerce Development
                      </h2>
                      <p className="leading-relaxed text-base">
                        We build scalable e-commerce solutions using platforms
                        like Shopify, WooCommerce, and Magento. From catalog
                        management to secure payments, we've got you covered.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                      <TbDeviceDesktopCog className="w-10 h-10"/>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                        Content Management Systems (CMS)
                      </h2>
                      <p className="leading-relaxed text-base">
                        We use CMS platforms like WordPress to create
                        easy-to-manage websites. You'll have full control over
                        your content, making updates a breeze.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 order-1 md:order-2 pt-12 px-6 md:px-0">
                  <h1 className="font-bold text-2xl text-center pb-16">
                    Unlock Your Web Development Potential with a FREE 45-Minute
                    Consultation Call! 🌐📞
                  </h1>
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <TechStack />
      <Portfolio />
      <Contact />
      <Bottom />
    </div>
  );
};

export default WebDevelopmentPage;
