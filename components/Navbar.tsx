"use client";

export default function Navbar() {
  return (
    <div className="grid grid-cols-3 px-5 sm:px-10 gap-8 items-center fixed top-0 left-0 right-0 h-18 z-10">
      <h3>Mslvn</h3>
      <h3>Rotterdam</h3>
      <h3 className="flex justify-end">Menu</h3>
    </div>
  );
}
