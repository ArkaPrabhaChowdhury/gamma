import React from "react";
import NavBar from "./../home/NavBar";
import Contact from "./../home/Contact";
import Bottom from "./../home/Bottom";
import Portfolio from "./../home/Portfolio";
import { Helmet } from "react-helmet";
import ContactForm from "../ContactForm";
import { RiSeoLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { TbWorldShare } from "react-icons/tb";

const DigitalPage = () => {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gamma Innovations - Digital Marketing Solutions</title>
        <meta
          name="description"
          content="Supercharge your online presence with Gamma Innovations' expert digital marketing solutions. Reach your target audience and achieve business growth through effective digital strategies!"
        />
        <meta
          name="keywords"
          content="Gamma Innovations, website development, app development, software development, digital marketing, tech consultancy, design"
        />
        <link
          rel="canonical"
          href="https://www.gammainnovations.com/digital-marketing"
        />
        <meta
          property="og:title"
          content="Gamma Innovations - Digital Marketing Solutions"
        />
        <meta
          property="og:description"
          content="Supercharge your online presence with Gamma Innovations' expert digital marketing solutions. Reach your target audience and achieve business growth through effective digital strategies!"
        />
        <meta
          property="og:image"
          content="https://www.gammainnovations.com/gamma.svg"
        />
        <meta
          property="og:url"
          content="https://www.gammainnovations.com/digital-marketing"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gamma Innovations" />
      </Helmet>
      <NavBar service={true} />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-3xl font-black text-gray-700 md:text-4xl p-2">
              Digital Marketing
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
              Strategic digital marketing solutions for online brand promotion
              and audience engagement.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-[#006b9f] inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap lg:px-24 sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="md:w-1/2 order-2 md:order-1 pt-12 md:pt-0">
              <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                  <RiSeoLine className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Search Engine Optimization
                  </h2>
                  <p className="leading-relaxed text-base">
                    Improve website visibility and organic search rankings with
                    effective search engine optimization strategies.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                  <TbWorldShare className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Social Media Marketing
                  </h2>
                  <p className="leading-relaxed text-base">
                    Create impactful social media campaigns to reach and engage
                    target audiences on various platforms.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                 <MdOutlineMail className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Email Marketing
                  </h2>
                  <p className="leading-relaxed text-base">
                    Design and execute effective email marketing campaigns to
                    nurture leads and drive customer engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 order-1 md:order-2 pt-12 px-6 md:px-0">
              <h1 className="font-bold text-2xl text-center pb-16">
              Supercharge Your Reach with 15 Days of FREE Digital Ads! 🌐📢
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

export default DigitalPage;
