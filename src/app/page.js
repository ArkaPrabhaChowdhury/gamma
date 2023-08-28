import Hero from "./Hero";
import Services from "./Services";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Bottom from "./Bottom";
import Prep from "./Prep";
import Featured from "./Featured";
import NavBar from "./Navbar";

const Home = () => {
  return (
    <>
      <NavBar/>
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
