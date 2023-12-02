"use client";

import { Button, Image } from "@nextui-org/react";
import "./globals.css";
import { useLayoutEffect } from "react";
import Link from "next/link";

export default function Custom404() {
  useLayoutEffect(() => {
    document.body.style.margin = "0";
  }, []);
  return (
    <section
      style={{
        background: "#0048B2",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      <section
        style={{
          background: "radial-gradient(#3B8AFF,#0048B2)",
          width: "200vmin",
          height: "200vmin",
          borderRadius: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <section
          style={{
            background: "radial-gradient(#3B8AFF,#0048B2)",
            width: "170vmin",
            height: "170vmin",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <section
            style={{
              background: "radial-gradient(#3B8AFF,#0048B2)",
              width: "140vmin",
              height: "140vmin",
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <section
              style={{
                background: "radial-gradient(#3B8AFF,#0048B2)",
                width: "110vmin",
                height: "110vmin",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <section
                style={{
                  background: "radial-gradient(#3B8AFF,#0048B2)",
                  width: "80vmin",
                  height: "80vmin",
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              ></section>
            </section>
          </section>
        </section>
      </section>

      <section
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="text-[26vmax] font-black text-white opacity-70 leading-[1em] mb-6">
          404
        </h1>
        <h3 className="text-2xl font-bold text-white mb-3">
          Oops! This page is not found.
        </h3>
        <p className="text-base text-white mb-2">
          The requested page does not exist
        </p>
        <Button
          as={Link}
          href="/"
          // className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
          //     font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
          //     shadow-lg"
          // color="secondary"
          className="w-[10vmax] h-[6vmin] bg-gray-100 round-sm"
        >
          Go to home
        </Button>
      </section>
    </section>
  );
}
