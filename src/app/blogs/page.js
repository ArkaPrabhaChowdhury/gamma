
import Bottom from "../(components)/Bottom";
import BlogNavbar from '../(components)/BlogNavbar';
import BlogCollection from "../(components)/BlogCollection";

const HomePage = async () => {
  return (
    <>
      <BlogNavbar />
      <BlogCollection />
      <Bottom />
    </>
  );
};



export default HomePage;
