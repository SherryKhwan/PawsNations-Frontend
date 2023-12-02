"use client";

import { Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const ForgetPasswordPage = () => {
  return (
    <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
      <h2
        className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
          xl:text-bold"
      >
        Forget Password
      </h2>
      <div className="mt-12">
        <form>
          <div>
            <Input
              type="text"
              variant="underlined"
              label="Email"
              //   placeholder="Enter your First Name"
            />
          </div>

          <div className="mt-10">
            <button
              className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                      shadow-lg"
            >
              Forget Password
            </button>
          </div>
        </form>
        <div className="flex justify-between items-center mt-12">
          <Link
            href="login"
            className="cursor-pointer text-indigo-600 hover:text-indigo-800"
          >
            Login
          </Link>
          <Link
            href="register"
            className="cursor-pointer text-indigo-600 hover:text-indigo-800"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
