import React from 'react';
import blogData from '../blogData';
import Navbar from './../../Navbar';
import Bottom from './../../Bottom';
const BlogPage = ({ params }) => {
  // Find the blog post by ID
  const blog = blogData.find((blog) => blog.id === parseInt(params.id));

  if (!blog) {
    return <div className="container mx-auto p-8">Blog not found</div>;
  }

  return (
    <suppressHydrationWarning>
    <Navbar policy={true}/>
    <div className=" py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl text-black text-center font-bold mb-4">{blog.title}</h1>
        <div className='w-full h-1/2 flex justify-center'>
          <img src={blog.image} alt={blog.title} className="mb-4" />
        </div>
        <div className="text-gray-600 mb-4 text-center text-md italic">{blog.description}</div>
        <article className="py-8 font-semibold text-gray-800 text-lg prose">
          {/* Render the HTML content */}
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </article>
      </div>
    </div>
    <Bottom/> 
    </suppressHydrationWarning>
  );
};

export default BlogPage;
