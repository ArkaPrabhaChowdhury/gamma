import Bottom from "../Bottom";
import Navbar from "../Navbar";
import BlogPreview from "./BlogPreview";
import blogData from "./blogData";

const HomePage = async () => {
  const getBlogs = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/blogs", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }
      console.log(res);
      return res.json();
    } catch (error) {
      console.log("Error loading blogs", error);
    }
  };
  const { blogs } = await getBlogs();
  return (
    <>
      <Navbar policy={true} />
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div class="text-center mb-20">
            <h1
              class="text-3xl font-black text-gray-700 md:text-4xl p-2 "
              id="services"
            >
              Our Latest Blogs
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
              Discover Insights & Innovations: Dive into Our Latest Blogs
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-[#006b9f] inline-flex"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.map((blog) => (
              <BlogPreview key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default HomePage;
