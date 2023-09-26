"use client";
import Link from "next/link";
import { usePathname,useRouter } from "next/navigation";
import Swal from "sweetalert2";



// Function to capitalize the first letter of each word
const capitalizeWords = (str) => {
  if (!str) return "";
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const handleDelete = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      // Call delete API if confirmed
      const res = await fetch("/api/blogs", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });

      Swal.fire("Deleted!", "The blog has been deleted.", "success");
      router.push("/admin/edit-blogs"); 
    }
  });
};

const BlogPreview = ({ blog }) => {
  const pathname = usePathname();

  // Format the blog title using the capitalizeWords function
  const formattedTitle = capitalizeWords(blog.title);

  // Check if the URL contains the word "admin"
  const isAdmin = pathname.includes("admin");
  const router = useRouter();
  if (isAdmin) {
    // If isAdmin is true, render without the parent Link component
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={blog.image}
          alt={formattedTitle}
          className="w-full h-32 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl text-black font-semibold mb-2">
            {formattedTitle}
          </h2>
          <p className="text-gray-600">{blog.description}</p>
          <div className="mt-4 flex gap-8 justify-between">
            {/* Render the Edit and Delete buttons without the Link component */}
            <a href={`/admin/edit-blogs/${blog.title}`} className="">
              <svg
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" />
                </g>
              </svg>
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleDelete(blog._id);
              }}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If isAdmin is false, render with the parent Link component
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Link href={`/blogs/${blog.title}`}>
        <img
          src={blog.image}
          alt={formattedTitle}
          className="w-full h-32 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl text-black font-semibold mb-2">
            {formattedTitle}
          </h2>
          <p className="text-gray-600">{blog.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogPreview;
