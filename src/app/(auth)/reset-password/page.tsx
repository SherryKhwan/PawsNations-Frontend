"use client";
import { Input } from "@nextui-org/react";
import React from "react";

const ResetPasswordPage = () => {
  return (
    <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
      <h2
        className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
      xl:text-bold"
      >
        Reset Password
      </h2>
      <div className="mt-12">
        <form>
          <div></div>
          <div className="mt-8">
            <Input label="Password" variant="underlined" type="password" />
          </div>
          <div className="mt-8">
            <Input label="Re-Password" variant="underlined" type="password" />
          </div>
          <div className="mt-10">
            <button
              className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                  shadow-lg"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
