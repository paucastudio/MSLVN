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
      <div className="grid items-center h-16 grid-cols-6 gap-4 px-5 sm:px-10 shrink-0">
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

      <div className="flex flex-col justify-end flex-1 min-h-0 gap-4 px-5 sm:px-10">
        <Link
          className="grid grid-cols-6 overflow-hidden"
          href="/"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={cn(
              "col-span-6 grid grid-cols-6 transition-transform duration-500 ease-in-out",
              isMenuOpen ? "translate-y-0 delay-500" : "translate-y-full",
            )}
          >
            <h1>01</h1>
            <h1 className="col-start-3">Work</h1>
          </div>
        </Link>
        <Link
          className="grid grid-cols-6 overflow-hidden"
          href="/"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={cn(
              "col-span-6 grid grid-cols-6 transition-transform duration-500 ease-in-out",
              isMenuOpen ? "translate-y-0 delay-500" : "translate-y-full",
            )}
          >
            <h1>02</h1>
            <h1 className="col-start-3">Work</h1>
          </div>
        </Link>
        <Link
          className="grid grid-cols-6 overflow-hidden"
          href="/"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={cn(
              "col-span-6 grid grid-cols-6 transition-transform duration-500 ease-in-out",
              isMenuOpen ? "translate-y-0 delay-500" : "translate-y-full",
            )}
          >
            <h1>03</h1>
            <h1 className="col-start-3">Work</h1>
          </div>
        </Link>
      </div>
    </nav>
  );
}
