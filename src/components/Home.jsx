import Hero from "./home/Hero"
import NavBar from "./home/NavBar"
import Services from './home/Services';
import Portfolio from './home/Portfolio';
import About from "./home/About";
import Contact from './home/Contact';
import Bottom from './home/Bottom';

const Home=()=> {
  return (
    <>
      <NavBar/>
      <Hero/> 
      <Services/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Bottom/>
    </>
  )
}

export default Home
