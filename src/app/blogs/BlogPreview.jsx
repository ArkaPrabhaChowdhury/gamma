"use client"
import Link from "next/link";

const BlogPreview = ({ blog }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Link href={`/blogs/${blog.id}`}>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-32 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl text-black font-semibold mb-2">{blog.title}</h2>
          <p className="text-gray-600">{blog.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogPreview;
