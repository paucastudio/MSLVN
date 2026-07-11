"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 grid items-center grid-cols-6 gap-8 px-5 sm:px-10 h-18">
      <h3>Mslvn</h3>
      <h3 className="col-start-3">Rotterdam</h3>
      <ThemeToggle />
      <h3 className="flex justify-end">Menu</h3>
    </div>
  );
}
