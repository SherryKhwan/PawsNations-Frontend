"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";
import { UserProvider } from "./user";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <UserProvider>{children}</UserProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
