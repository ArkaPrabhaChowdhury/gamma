import Blogs from "@/models/blogs";
import connectMongoDB from "@/libs/mongodb";
import BlogForm from "@/app/(components)/BlogForm";
const AdminDashboard = async ({params}) => {
  await connectMongoDB();
  const blogs = await Blogs.find().lean().exec();
  const capitalizeWords = (str) => {
    if (!str) return ""; // Check if str is undefined or null
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  console.log(blogs);
  const blogData = blogs.find((blog) => blog.title === params.id);
  const formattedTitle = capitalizeWords(blogData.title);
  return (
    <div>
      <BlogForm data={blogData} title={formattedTitle}/>
    </div>
  );
};

export default AdminDashboard;
