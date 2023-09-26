import React from "react";
import ContactForm from "../../(components)/ContactForm";
import BlogNavbar from "../../(components)/BlogNavbar";
import Bottom from "../../(components)/Bottom";
import "./app.css"

export const metadata = {
  title: "Gamma Innovations - App Development Services",
  description:
    "Build cutting-edge mobile apps with Gamma Innovations' expert app development services. From concept to launch, we deliver innovative and user-friendly apps tailored to your business needs!",
  keywords: [
    "Gamma Innovations",
    "web development",
    "app development",
    "software development",
    "digital marketing",
    "tech consultancy",
  ],
  metadataBase: new URL("https://www.gammainnovations.com"),
  alternates: {
    canonical: "/app-development",
  },
  openGraph: {
    title: "Gamma Innovations - App Development Services",
    description:
      "Build cutting-edge mobile apps with Gamma Innovations' expert app development services. From concept to launch, we deliver innovative and user-friendly apps tailored to your business needs!",
    url: "https://www.gammainnovations.com/app-development",
    type: "website",
    siteName: "Gamma Innovations",
    images: "/gamma.svg",
  },
};

const AppDevelopmentPage = () => {
  return (
    <div>
      <BlogNavbar />
      <section
        className="relative bg-white text-gray-700"
      >
        <div className="container px-5 py-6 md:py-24 mx-auto overflow-hidden bg-cover bg-no-repeat p-12 text-center text-gray-700 bg-custom-image">
          <div className="text-center md:mb-20">
            <h1 className="text-2xl lg:text-4xl text-grey-700 font-semibold py-4">
              Looking for an app for your business & personal needs?
            </h1>
            <p className="text-red-700 text-xl lg:text-4xl font-semibold">
              Note: You're Going To Get Your Dream App At A Discount
            </p>
            <div className="flex justify-center">
              <p className="text-3xl text-grey-700 py-4 hidden lg:block font-semibold text-center w-3/4">
                Gamma Innovations App Development Service Prepared To Fulfill Your Dream. Pro Team At Your Disposal
              </p>
            </div>
            <div className="flex justify-center">
              <hr className="lg:w-1/2 border-b-2 border-grey-700 my-4" />
            </div>
            <h1 className="text-2xl text-black py-4">
              Enter your details below to{" "}
              <span className="font-bold">Claim your app</span>
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="px-6 lg:w-1/2 md:px-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Bottom />
    </div>
  );
};

export default AppDevelopmentPage;
