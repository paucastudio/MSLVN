import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-40 px-5 py-8 sm:px-10">
      <div className="grid items-stretch grid-cols-6 gap-4">
        <div className="flex flex-col col-span-2 gap-4 pt-4 border-t bg-amber-200"></div>
        <div className="flex flex-col col-span-2 col-start-3 gap-4 pt-4 border-t">
          <h3 className="text-foreground/30">Sitemap</h3>
          <div className="flex flex-col">
            <h3>Work</h3>
            <h3>Process</h3>
            <h3>About</h3>
          </div>
        </div>

        <div className="flex flex-col col-span-2 gap-4 pt-4 border-t">
          <h3 className="text-foreground/30">Socials</h3>
          <div className="flex flex-col">
            <h3>Instagram</h3>
            <h3>Twitter</h3>
            <h3>LinkedIn</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="border-line"></div>
        <div className="grid items-stretch grid-cols-6 gap-4">
          <h1 className="col-span-2">M</h1>
          <h1 className="col-start-3">S</h1>
          <h1 className="col-start-6 text-right">/26</h1>
        </div>
      </div>
    </footer>
  );
}
