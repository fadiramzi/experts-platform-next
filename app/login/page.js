"use client";
import { useRouter } from "next/navigation";
import React from "react";
import myAxios from "../lib/my-axios";
import Image from "next/image";

export default function login() {
  const router = useRouter();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Logging in user:", { username, password });
    // Add your login logic here

    try {
      const response = await myAxios.post("/auth/login", {
        email: username,
        password,
      });
      console.log("Login response:", response);
      const data = response.data;
      // localStorage.setItem('expertLoginData', JSON.stringify(data));

      router.push("/experts");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center space-y-2">
        <Image src='https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500' width={50} height={50} alt="Logo" />
       <p className="text-xl font-bold">Sign in to your account</p>
      </div>
      <div className="mt-8 h-72 w-72">
        <form className="space-y-3">
          <div className="flex flex-col">
            <label className="mb-1">Email Address</label>
             <input
             className="bg-white/5 outline-1 rounded-sm focus:outline-1 focus:text-blue-300"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          </div>
          <div className="flex flex-col">
            <label className="uppercase">Password</label>
             <input
             className="bg-white/5 outline-1 rounded-sm focus:outline-1 focus:text-blue-300"

            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <button
          className="w-full bg-indigo-500 rounded-sm text-white font-bold hover:bg-indigo-400"
          type="submit" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
