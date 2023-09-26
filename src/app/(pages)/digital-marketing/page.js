import React from "react";
import Contact from "../../(components)/Contact";
import Bottom from "../../(components)/Bottom";
import Featured from "../../(components)/Featured";
import ContactForm from "../../(components)/ContactForm";
import { RiSeoLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { TbWorldShare } from "react-icons/tb";
import dig1 from "../../(components)/assets/work3.png";
import dig2 from "../../(components)/assets/dig2.png";
import dig3 from "../../(components)/assets/dig3.png";
import Navbar from "../../(components)/Navbar";

export const metadata = {
  title:
    "Gamma Innovations - Digital Marketing Solutions",
  description:
  "Supercharge your online presence with Gamma Innovations' expert digital marketing solutions. Reach your target audience and achieve business growth through effective digital strategies!",
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
    canonical: '/digital-marketing',
  },
  openGraph: {
    title:'Gamma Innovations - Digital Marketing Solutions',
    description: "Supercharge your online presence with Gamma Innovations' expert digital marketing solutions. Reach your target audience and achieve business growth through effective digital strategies!",
    url: 'https://www.gammainnovations.com/digital-marketing',
    type: 'website',
    siteName: 'Gamma Innovations',
    images: '/gamma.svg',
  },
};

const DigitalPage = () => {
  return (
    <div>
      <Navbar service={true} />
      <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-6 md:py-24 mx-auto">
          <div className="text-center md:mb-20">
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
                    src="https://i.postimg.cc/FzdDbk1s/work3.webp"
                  />
                  <a href="https://www.freelancer.com/u/gammainnovations/portfolio/from-dubai-to-a-million-menakarts-digital-triumph-11267093?w=f&ngsw-bypass=" target="_blank">
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-[#006b9f] mb-1">
                      Digital Marketing
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Menakart
                      </h1>
                      <p class="leading-relaxed">
                      Through our expert digital advertising strategies, Menakart soared to a million-dollar sales milestone
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full object-center"
                    src="https://i.postimg.cc/K83XJ4kV/dig2.webp
                    "
                  />
                  <a
                    href="https://www.freelancer.com/u/gammainnovations/portfolio/learnerbly-roas-a-digital-marketing-success-story-11267090?w=f&ngsw-bypass="
                    target="_blank"
                  >
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-[#006b9f] mb-1">
                      Digital Marketing
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Learnerbly ROAS
                      </h1>
                      <p class="leading-relaxed">
                        {" "}
                        We partnered with Learnerbly to catalyze a monumental leap in their Return on Ad Spend (ROAS).
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src="https://i.postimg.cc/h4MqGkRC/dig3.webp"
                  />
                  <a
                    href="https://www.freelancer.com/u/gammainnovations/portfolio/seo-success-100000-organic-clicks-in-3-months-tremgloal-11267144?w=f&ngsw-bypass="
                    target="_blank"
                  >
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-[#006b9f] mb-1">
                        Digital Marketing
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      TremGlobal SEO
                      </h1>
                      <p class="leading-relaxed">
                       We catapulted TremGlobal to a stunning achievement of 100,000 organic clicks in just 3 months. 
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

export default DigitalPage;
