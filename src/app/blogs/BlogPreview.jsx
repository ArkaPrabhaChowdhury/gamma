"use client"
import Link from "next/link";

// Function to capitalize the first letter of each word
const capitalizeWords = (str) => {
  if (!str) return ''; // Check if str is undefined or null
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const BlogPreview = ({ blog }) => {
  // Format the blog title using the capitalizeWords function
  const formattedTitle = capitalizeWords(blog.title);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Link href={`/blogs/${blog.title}`}>
        <img
          src={blog.image}
          alt={formattedTitle}
          className="w-full h-32 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl text-black font-semibold mb-2">{formattedTitle}</h2>
          <p className="text-gray-600">{blog.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogPreview;
