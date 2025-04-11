"use client";
import axios from "axios";
import { LockOpen, User2Icon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3030/api/auth/signin",
        { username, password }
      );
      const token = response.data.token;

      // Save token in cookie (client-side)
      Cookies.set("jwt", token, {
        expires: 7,
        sameSite: "Lax",
      });

      Cookies.set('username',username,{
        expires:7,
        sameSite:"Lax"
      })

      router.push('/game');

      console.log("Token saved in cookie:", token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="bg-slate-800/30 border border-slate-400 rounded-md p-8 relative  backdrop-blur-sm shadow-lg back backdrop-sepia backdrop-opacity-30 ">
        <h1 className="text-4xl text-center mb-6 font-bold">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="relative my-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="peer block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-b-2 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white bg-transparent duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Username
            </label>
            <User2Icon className="absolute top-3 right-4 size-5" />
          </div>
          <div className="relative my-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-b-2 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white bg-transparent duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            <LockOpen className="absolute top-3 right-4 size-5" />
          </div>

          <button
            type="submit"
            className="w-full mb-4 text-2xl mt-6 rounded-full py-2 bg-cyan-700 text-white hover:bg-cyan-900 cursor-pointer transition-colors duration-300"
          >
            Login
          </button>
          <span className="mt-4">
            New Here? &nbsp;{" "}
            <Link className="text-blue-500" href="/signup">
              {" "}
              Create an Account
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default page;
