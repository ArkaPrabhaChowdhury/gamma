"use client";

import AdminNavbar from "@/app/AdminNavbar";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const AdminDashboard = () => {
  const [originalTitle, setOriginalTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    const title = originalTitle.toLowerCase().replace(/\s+/g, "-");
    const blog = {
      title,
      image,
      description,
      content,
    };
    console.log(blog);
    e.preventDefault();

    if (title && image && description && content) {
      try {
        const res = await fetch("/api/blogs", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(blog),
        });

        if (!res.ok) {
          throw new Error("Error publishing blog");
        } else {
          toast.success("Blog published successfully");
        }
      } catch (error) {
        console.log("Error publishing blog", error);
      }
    } else {
      toast.error("Please enter all fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
  };
  return (
    <div>
      <AdminNavbar />
      <div className="relative p-8 bg-white min-h-screen text-gray-700 sm:p-12">
        <h1 className="text-center font-bold text-2xl py-8">
          Publish blogs here
        </h1>
        <input
          type="text"
          onChange={(e) => setOriginalTitle(e.target.value)}
          placeholder="Title"
          value={originalTitle}
          className="border-[f0f0f0] w-full rounded border py-3 my-4 px-[14px] text-base text-body-color outline-none focus:border-gray-400 focus-visible:shadow-none"
        />
        <input
          type="text"
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image"
          value={image}
          className="border-[f0f0f0] w-full rounded border py-3 my-4 px-[14px] text-base text-body-color outline-none focus:border-gray-400 focus-visible:shadow-none"
        />
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          value={description}
          className="border-[f0f0f0] w-full rounded border py-3 my-4 px-[14px] text-base text-body-color outline-none focus:border-gray-400 focus-visible:shadow-none"
        />
        <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
        />

        <div>
          <button
            className="w-full mt-6 p-3 text-white transition border rounded border-gray-400 bg-[#006b9f] hover:bg-opacity-90"
            onClick={handleSubmit} // Call the handleSubmit function when the button is clicked
          >
            Publish blog
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;
