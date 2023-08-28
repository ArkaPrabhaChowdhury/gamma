import React from "react";
import Contact from "../Contact";
import Bottom from "../Bottom";
import Portfolio from "../Portfolio";
import ContactForm from "../ContactForm";
import Featured from "../Featured";
import { MdOutlineDesignServices, MdOutlineWeb } from "react-icons/md";
import Navbar from "../Navbar";

export const metadata = {
  title:
    "Gamma Innovations - Design Services",
  description:
  "Gamma Innovations offers expert design services, including web design, graphic design, and brand identity design. Enhance your online presence, elevate your brand, and leave a lasting impression with our creative design solutions!",
  keywords: [
    "Gamma Innovations",
    "web development",
    "app development",
    "software development",
    "digital marketing",
    "tech consultancy",
  ],
  metadataBase: new URL('https://www.gammainnovations.com'),
  alternates:{
    canonical: '/design',
  },
  openGraph: {
    title:'Gamma Innovations - Design Services',
    description: "Gamma Innovations offers expert design services, including web design, graphic design, and brand identity design. Enhance your online presence, elevate your brand, and leave a lasting impression with our creative design solutions!",
    url: 'https://www.gammainnovations.com/design',
    type: 'website',
    siteName: 'Gamma Innovations',
    images: '/gamma.svg',
  },
};

const DesignPage = () => {
  return (
    <div>
      <Navbar service={true} />
      <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-6 md:py-24 mx-auto">
          <div className="text-center md:mb-20">
            <h1 className="text-3xl font-black text-gray-700 md:text-4xl p-2">
              Designing Services
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
              Creative design solutions to bring your brand vision to life and
              captivate your target audience.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-[#006b9f] inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap lg: sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="md:w-1/2 order-2 md:order-1 pt-12 md:pt-0">
              <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                  <MdOutlineDesignServices className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Brand Identity Design
                  </h2>
                  <p className="leading-relaxed text-base">
                    Craft unique and memorable brand identities that resonate
                    with your target audience and communicate your values.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                  <MdOutlineWeb className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Web Design and Development
                  </h2>
                  <p className="leading-relaxed text-base">
                    Create visually appealing and user-friendly websites that
                    effectively showcase your products and services.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
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
                    Graphic Design
                  </h2>
                  <p className="leading-relaxed text-base">
                    Design eye-catching graphics, illustrations, and marketing
                    materials that capture attention and convey your message
                    effectively.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 pt-12">
              <h1 className="font-bold text-2xl text-center pb-16">
              Schedule a free 30-minute strategy call with our experts! 🎨📞
              </h1>
              <ContactForm/>
            </div>
          </div>
        </div>
      </section>
      <Portfolio />
      <Featured />
      <Contact />
      <Bottom />
    </div>
  );
};

export default DesignPage;
