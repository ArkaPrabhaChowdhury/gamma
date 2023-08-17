import React from "react";
import NavBar from "./../home/NavBar";
import Contact from "./../home/Contact";
import Bottom from "./../home/Bottom";
import Portfolio from "./../home/Portfolio";
import { Helmet } from "react-helmet";
import ContactForm from "../ContactForm";
const SoftwareDevelopmentPage = () => {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gamma Innovations - Software Development Solutions</title>
        <meta
          name="description"
          content="Get innovative software development solutions with Gamma Innovations. Empower your business with cutting-edge software tailored to your needs!"
        />
        <meta
          name="keywords"
          content="Gamma Innovations, website development, app development, software development, digital marketing, tech consultancy, design"
        />
        <link
          rel="canonical"
          href="https://www.gammainnovations.com/software-development"
        />
        <meta
          property="og:title"
          content="Gamma Innovations - Software Development Solutions"
        />
        <meta
          property="og:description"
          content="Get innovative software development solutions with Gamma Innovations. Empower your business with cutting-edge software tailored to your needs!"
        />
        <meta
          property="og:image"
          content="https://www.gammainnovations.com/gamma.svg"
        />
        <meta
          property="og:url"
          content="https://www.gammainnovations.com/software-development"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gamma Innovations" />
      </Helmet>
      <NavBar service={true} />
      <div>
        <section className="text-gray-600 body-font pb-12">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-3xl font-black text-gray-700 md:text-4xl p-2">
                Software Development
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
                Tailored ERP, Billing, User Management, HR, and Supply Chain
                Systems
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-[#006b9f] inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="md:w-1/2">
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
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      ERP Solutions
                    </h2>
                    <p className="leading-relaxed text-base">
                      Tailored Enterprise Resource Planning (ERP) systems for
                      streamlining business processes.
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
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      Billing Systems
                    </h2>
                    <p className="leading-relaxed text-base">
                      Customized billing systems for efficient invoicing and
                      payment management.
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
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      User Management
                    </h2>
                    <p className="leading-relaxed text-base">
                      User management systems to handle authentication, access
                      control, and user data management.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 pt-12">
                <h1 className="font-bold text-2xl text-center pb-16">
                  Unlock Your Potential with a FREE 45-Minute Software
                  Development Discussion! 💻📞
                </h1>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Portfolio />
      <Contact />
      <Bottom />
    </div>
  );
};

export default SoftwareDevelopmentPage;
