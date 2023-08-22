import Hero from "./home/Hero";
import NavBar from "./home/NavBar";
import Services from "./home/Services";
import Portfolio from "./home/Portfolio";
import About from "./home/About";
import Contact from "./home/Contact";
import Bottom from "./home/Bottom";
import Prep from "./home/Prep";
import { Helmet } from "react-helmet";
import Featured from "./home/Featured";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Gamma Innovations - Empowering Businesses with Transformative
          Technology Solutions
        </title>
        <meta
          name="description"
          content="Gamma Innovations is dedicated to empowering businesses with innovative app and website development solutions that drive growth and propel businesses forward in the digital landscape. Discover our tailored services today!"
        />
        <meta
          name="keywords"
          content="Gamma Innovations, website development, app development, software development, digital marketing, tech consultancy, design"
        />
        <link rel="canonical" href="https://www.gammainnovations.com/" />
        <meta
          property="og:title"
          content="Gamma Innovations - Empowering Businesses with Transformative Technology Solutions"
        />
        <meta
          property="og:description"
          content="Gamma Innovations is dedicated to empowering businesses with innovative app and website development solutions that drive growth and propel businesses forward in the digital landscape. Discover our tailored services today!"
        />
        <meta
          property="og:image"
          content="https://www.gammainnovations.com/gamma.svg"
        />
        <meta property="og:url" content="https://www.gammainnovations.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gamma Innovations" />
      </Helmet>
      <NavBar service={false} />
      <Hero />
      <Services />
      <Prep />
      <Portfolio />
      <About />
      <Featured/>
      <Contact />
      <Bottom />
    </>
  );
};

export default Home;
