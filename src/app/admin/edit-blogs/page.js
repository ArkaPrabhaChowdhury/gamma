import BlogPreview from "@/app/(components)/BlogPreview";
import Blogs from "@/models/blogs";
import connectMongoDB from "@/libs/mongodb";
import AdminNavbar from "@/app/(components)/AdminNavbar";
import Bottom from "@/app/(components)/Bottom";
const HomePage = async () => {
  await connectMongoDB();
  const blogs = await Blogs.find().lean().exec();

  return (
    <>
      <AdminNavbar/>
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div class="text-center mb-20">
            <h1
              class="text-3xl font-black text-gray-700 md:text-4xl p-2 "
              id="services"
            >
              Edit blogs
            </h1>
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
      <Bottom/>
    </>
  );
};

export default HomePage;
