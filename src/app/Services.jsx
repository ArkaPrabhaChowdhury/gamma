"use client"
import React from "react";
import web from "./assets/web.svg";
import app from "./assets/app.svg";
import digital from "./assets/marketing.svg";
import software from "./assets/software.svg";
import Link from "next/link";
import Image from "next/image";
const Services = () => {
  const  handleClick = () => {
    console.log("Hello");
  };
  return (
    <div>
      <section class="text-gray-600 body-font bg-white">
        <div class="container px-5 py-20 mx-auto">
          <div class="text-center mb-20">
            <h1
              class="text-3xl font-black text-gray-700 md:text-4xl p-2 "
              id="services"
            >
              Our Services
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
              Tailored, Innovative, and Creative Services for Rapid Advancement
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-[#006b9f] inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                <Image src={web} className="w-10 h-10" alt="logo" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Website development
                </h2>
                <p class="leading-relaxed text-base">
                  Crafting Dynamic Websites with React, Angular, Node.js, PHP,
                  and WordPress
                </p>
              </div>
              <Link class="mt-3 text-[#006b9f] inline-flex items-center" href="/web-development" onClick={handleClick}>
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                <Image src={app} className="w-10 h-10" alt="logo" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  App development
                </h2>
                <p class="leading-relaxed text-base">
                  Harnessing the Power of Kotlin, Java, Swift, and Firebase for
                  Innovative App Development
                </p>
                <Link class="mt-3 text-[#006b9f] inline-flex items-center" href="/app-development" onClick={handleClick}>
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
              <Image src={software} className="w-10 h-10" alt="logo" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Customize Software development
                </h2>
                <p class="leading-relaxed text-base">
                  Delivering Tailored ERP, Billing, User Management, HR, and
                  Supply Chain Systems
                </p>
                <Link class="mt-3 text-[#006b9f] inline-flex items-center" href="/software-development" onClick={handleClick}>
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap pt-8 sm:-m-4 -mx-4 ">
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
              <Image src={digital} className="w-10 h-10" alt="logo" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Digital Marketing
                </h2>
                <p class="leading-relaxed text-base">
                  Mastering Meta Ads, Google Ads, and SEO for Digital Success
                </p>
                <Link class="mt-3 text-[#006b9f] inline-flex items-center" href="/digital-marketing" onClick={handleClick}>
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Designing
                </h2>
                <p class="leading-relaxed text-base">
                  Crafting Engaging UI/UX and Striking Graphic Designs for
                  Unforgettable Impressions
                </p>
                <Link class="mt-3 text-[#006b9f] inline-flex items-center" href="/design" onClick={handleClick}>
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#006b9f] mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Tech consultancy
                </h2>
                <p class="leading-relaxed text-base">
                  Expert Tech Consultancy for Strategic Growth and Innovation
                </p>
                <Link class="mt-3 text-[#006b9f] inline-flex items-center" href="/tech-consultancy" onClick={handleClick}>
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
