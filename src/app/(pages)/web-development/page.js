import React from "react";
import Contact from "../../(components)/Contact";
import Bottom from "../../(components)/Bottom";
import TechStack from "../../(components)/TechStack";
import Featured from "../../(components)/Featured";
import ContactForm from "../../(components)/ContactForm";
import { CgShoppingCart, CgWebsite } from "react-icons/cg";
import { TbDeviceDesktopCog } from "react-icons/tb";
import web1 from "../../(components)/assets/work1.png";
import web2 from "../../(components)/assets/web2.png";
import web3 from "../../(components)/assets/web3.png";

import Navbar from "../../(components)/Navbar";

export const metadata = {
  title:
    "Gamma Innovations - Web Development and Transformative Technology Solutions",
  description:
    "Get your website built in the most creative and efficient manner with Gamma Innovations' expert web development services. Empower your business with transformative technology solutions today!",
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
    canonical: '/web-development',
  },
  openGraph: {
    title:'Gamma Innovations - Web Development and Transformative Technology Solutions',
    description: "Get your website built in the most creative and efficient manner with Gamma Innovations' expert web development services. Empower your business with transformative technology solutions today!",
    url: 'https://www.gammainnovations.com/web-development',
    type: 'website',
    siteName: 'Gamma Innovations',
    images: '/gamma.svg',
  },
};

const WebDevelopmentPage = () => {
  return (
    <div>
      <Navbar service={true} />
      <div className="flex flex-wrap lg:px-40 bg-white">
        <div className="w-full p-4">
          <section className="text-gray-600 body-font pb-12">
            <div className="container px-5 py-6 md:py-12 mx-auto">
              <div className="text-center  md:mb-20">
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
                      <CgWebsite className="w-10 h-10" />
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
                      <CgShoppingCart className="w-10 h-10" />
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
                      <TbDeviceDesktopCog className="w-10 h-10" />
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
                    Schedule a free 30-minute strategy call with our experts!
                    🎨📞
                  </h1>
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <TechStack />
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
                    src="https://i.postimg.cc/QNynP0JY/work1.webp"
                  />
                  <a href="https://www.TremGlobal.com" target="_blank">
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-[#006b9f] mb-1">
                        Website
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        TremGlobal
                      </h1>
                      <p class="leading-relaxed">
                        Remarkable platform serves as a gateway to the dynamic
                        real estate markets of Turkey and Dubai
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full"
                    src="https://i.postimg.cc/ydqxjk1Y/web2.webp"
                  />
                  <a href="https://outsavvy.com" target="_blank">
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-[#006b9f] mb-1">
                        Website
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Outsavvy
                      </h1>
                      <p class="leading-relaxed">
                        {" "}
                        This cutting-edge platform is dedicated to enhancing the
                        LGBTQ+ event experience in the UK
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full"
                    src="https://i.postimg.cc/Njz5ydZX/web3.webp"
                  />
                  <a href="https://www.tutorix.com" target="_blank">
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-[#006b9f] mb-1">
                        Website
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Tutorix
                      </h1>
                      <p class="leading-relaxed">
                        Tutorix.com embodies the essence of modern online
                        education, offering a comprehensive platform
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

export default WebDevelopmentPage;
