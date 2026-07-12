"use client";

import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={cn(
        "transition-all ease-in-out duration-500 fixed top-0 left-0 right-0 z-10 border-b overflow-hidden flex flex-col",
        isMenuOpen ? "h-screen bg-background" : "h-16",
      )}
    >
      {/* Top section with logo and menu toggle button */}
      <div className="grid items-center h-16 grid-cols-6 gap-8 px-5 sm:px-10 shrink-0">
        <Link href="/">
          <h3>Mslvn</h3>
        </Link>
        <h3 className="col-start-3">Rotterdam</h3>
        <ThemeToggle />
        <button
          className="flex justify-end"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <h3>Close</h3> : <h3>Menu</h3>}
        </button>
      </div>

      {/* Bottom section with navigation links */}
      <div className="grid items-end flex-1 min-h-0 grid-cols-6 gap-8 px-5 sm:px-10">
        <div className="flex flex-col col-span-4 gap-4">
          <Link
            className="overflow-hidden"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <h1
              className={cn(
                "transition-all duration-500 ease-in-out",
                isMenuOpen
                  ? "translate-y-0 delay-500"
                  : "translate-y-full  delay-0",
              )}
            >
              About
            </h1>
          </Link>
          <Link
            className="overflow-hidden"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <h1
              className={cn(
                "transition-all duration-500 ease-in-out",
                isMenuOpen
                  ? "translate-y-0 delay-500"
                  : "translate-y-full delay-0",
              )}
            >
              Blog
            </h1>
          </Link>
          <Link
            className="overflow-hidden"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <h1
              className={cn(
                "transition-all duration-500 ease-in-out",
                isMenuOpen
                  ? "translate-y-0 delay-500"
                  : "translate-y-full delay-0",
              )}
            >
              Work
            </h1>
          </Link>
        </div>
      </div>
    </nav>
  );
}
