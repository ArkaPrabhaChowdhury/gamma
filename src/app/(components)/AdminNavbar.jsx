"use client";
import logo from "./assets/logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
const AdminNavbar = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await fetch("/api/user/logout");
      toast.success("Logout successful");
      router.push("/admin");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  return (
    <div>
      <header className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
          >
            <Image src={logo} alt="logo" className="w-10 h-10" />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="/admin/dashboard">
              <button className="mr-5 group transition text-lg font-medium duration-300">
                Dashboard
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </button>
            </a>
            <a href="/blogs">
              <button className="mr-5 group transition text-lg font-medium duration-300">
                Blogs
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </button>
            </a>
            <a href="/admin/edit-blogs">
              <button className="mr-5 group transition text-lg font-medium duration-300">
                Edit blogs
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </button>
            </a>
          </nav>

          <button
            className="inline-flex items-center text-white  bg-[#006b9f] border-0 py-1 px-3 focus:outline-none hover:bg-[#248dc1] rounded text-base mt-4 md:mt-0"
            onClick={handleLogout}
          >
            Log out
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <ToastContainer/>
    </div>
  );
};

export default AdminNavbar;
