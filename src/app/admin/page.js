"use client";

import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if email and password match
    if (email === "gammainnovs@gmail.com" && password === "gamma@123") {
      const user = {
        email,
        password,
      };
      // Redirect to admin/dashboard
      try {
        const res = await fetch("/api/user", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        });

        if (!res.ok) {
          throw new Error("Error logging in");
        } else {
          toast.success("Logged in!");
          router.push("/admin/dashboard");  
        }
      } catch (error) {
        console.log("Error publishing blog", error);
      }
    } else {
      toast.error("Invalid email or password! Try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <div class="w-full h-screen flex items-center justify-center bg-indigo-100">
        <form class="w-full md:w-1/3 rounded-lg" onSubmit={handleLogin}>
          <div class="flex font-bold justify-center mt-6">
            <Image class="h-20 w-20 mb-3" src={logo} />
          </div>
          <h2 class="text-2xl text-center text-gray-200 mb-8">Login</h2>
          <div class="px-12 pb-10">
            <div class="w-full mb-2">
              <div class="flex items-center">
                <input
                  type="text"
                  placeholder="Email Address"
                  class="
                w-full
                border
                rounded
                px-3
                py-2
                text-gray-700
                focus:outline-none
              "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div class="w-full mb-2">
              <div class="flex items-center">
                <input
                  type="password"
                  placeholder="Password"
                  class="
                w-full
                border
                rounded
                px-3
                py-2
                text-gray-700
                focus:outline-none
              "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              class="
            w-full
            py-2
            mt-8
            rounded-full
            bg-blue-400
            text-gray-100
            focus:outline-none
          "
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminPage;
