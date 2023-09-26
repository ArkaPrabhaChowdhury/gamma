import Hero from "./(components)/Hero";
import Services from "./(components)/Services";
import Portfolio from "./(components)/Portfolio";
import About from "./(components)/About";
import Contact from "./(components)/Contact";
import Bottom from "./(components)/Bottom";
import Prep from "./(components)/Prep";
import Featured from "./(components)/Featured";
import NavBar from "./(components)/Navbar";

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
