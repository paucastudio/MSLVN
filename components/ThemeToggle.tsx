"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="bg-foreground rounded-full w-[16] h-[16] cursor-pointer transition-colors duration-300 ease-in-out col-start-5"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    ></div>
  );
}
