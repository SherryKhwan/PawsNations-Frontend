"use client";

import { NextUIProvider as NextUIProviderSource } from "@nextui-org/react";

export function NextUIProvider({ children }) {
  return <NextUIProviderSource>{children}</NextUIProviderSource>;
}
