import React from 'react';
import NavBar from './../home/NavBar';
import Contact from './../home/Contact';
import Bottom from './../home/Bottom';
import Portfolio from './../home/Portfolio';
const DigitalPage = () => {
  return (
    <div>
      <NavBar service={true}/>
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
                  <path d="M12 20h9"></path>
                  <path d="M12 4h9"></path>
                  <path d="M4 12h9"></path>
                  <path d="M4 12L12 20"></path>
                  <path d="M4 12L12 4"></path>
                </svg>
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
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M12 2v3m0 12v3m-9-6h3m12 0h3M3 12h3m0-9l9 9-9 9"></path>
                </svg>
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
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20 4h-7L7 12v10h10"></path>
                  <path d="M14 16l-4 4m4-4V5"></path>
                </svg>
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
        </div>
      </section>
      <Portfolio/>
      <Contact/>
      <Bottom/>
    </div>
  );
};

export default DigitalPage;
