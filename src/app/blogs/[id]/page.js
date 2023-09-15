import React from 'react';
import blogData from '../blogData';
import Navbar from './../../Navbar';
import Bottom from './../../Bottom';
const BlogPage = async ({ params }) => {
  // Find the blog post by ID
  const getBlogs = async () => {
    try {
      const res = await fetch("https://www.gammainnovations.com/api/blogs", {
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
  const capitalizeWords = (str) => {
    if (!str) return ''; // Check if str is undefined or null
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  const { blogs } = await getBlogs();
  console.log(blogs);
  const blogData=blogs.find((blog) => blog.title === params.id);
  const formattedTitle = capitalizeWords(blogData.title);
  return (
    <suppressHydrationWarning>
    <Navbar policy={true}/>
    <div className=" py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl text-black text-center font-bold mb-4">{formattedTitle}</h1>
        <div className='w-full h-1/2 flex justify-center'>
          <img src={blogData.image} alt={blogData.title} className="mb-4" />
        </div>
        <div className="text-gray-600 mb-4 text-center text-md italic">{blogData.description}</div>
        <article className="py-8 text-gray-800 text-lg prose">
          {/* Render the HTML content */}
          <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
        </article>
      </div>
    </div>
    <Bottom/> 
    </suppressHydrationWarning>
  );
};

export default BlogPage;
