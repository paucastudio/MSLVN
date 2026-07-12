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
        "transition-all duration-500 fixed top-0 left-0 right-0 z-10 border-b overflow-hidden flex flex-col",
        isMenuOpen ? "h-screen bg-background" : "h-16",
      )}
    >
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
      <div className="grid items-end flex-1 min-h-0 grid-cols-6 gap-8 px-5 sm:px-10">
        <div
          className={cn(
            "transition-all  text-foreground/10 pb-8",
            isMenuOpen
              ? "duration-500 delay-500 opacity-100 translate-y-0"
              : "duration-150 opacity-0 translate-y-4",
          )}
        >
          <h1>01</h1>
          <h1>02</h1>
          <h1>03</h1>
        </div>
        <div
          className={cn(
            "transition-all  col-start-3 pb-8",
            isMenuOpen
              ? "duration-500 delay-500 opacity-100 translate-y-0"
              : "duration-150 opacity-0 translate-y-4",
          )}
        >
          <Link href="/about">
            <h1>About</h1>
          </Link>
          <Link href="/projects">
            <h1>Projects</h1>
          </Link>
          <Link href="/contact">
            <h1>Contact</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
}
