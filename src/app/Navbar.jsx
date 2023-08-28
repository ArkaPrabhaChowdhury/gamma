"use client";
import Image from "next/image";
import logo from "./assets/logo.svg";
import { Link } from "react-scroll";
const Navbar = ({ service }) => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
          >
            <Image
              src={logo}
              width={48}
              height={48}
              alt="Gamma innovations logo"
            />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {service ? (
              <a href="/">
                <button className="mr-5 group transition text-lg font-medium duration-300">
                  Home
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                </button>
              </a>
            ) : (
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                <button className="mr-5 group transition text-lg font-medium duration-300">
                  Home
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                </button>
              </Link>
            )}
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <button className="mr-5 group transition text-lg font-medium duration-300">
                Services
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </button>
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <button className="mr-5 group transition text-lg font-medium duration-300">
                Portfolio
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </button>
            </Link>
            {!service && (
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                <button className="mr-5 group transition text-lg font-medium duration-300">
                  About Us
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                </button>
              </Link>
            )}
          </nav>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={30}
            duration={500}
          >
            <button className="inline-flex items-center text-white  bg-[#006b9f] border-0 py-1 px-3 focus:outline-none hover:bg-[#248dc1] rounded text-base mt-4 md:mt-0">
              Contact
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
