"use client";
import React, { useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export const DarkModeSwitch = () => {
  const { setTheme, theme } = useNextTheme();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(theme === 'dark' ? true : false)
  }, [theme])

  return (
    <Switch
      isSelected={isDark}
      size="lg"
      onValueChange={(e) => setTheme(e ? "dark" : "light")}
      startContent={<MoonIcon />}
      endContent={<SunIcon />}
    />
  );
};
