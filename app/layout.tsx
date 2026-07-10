import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const Overused = localFont({
  src: "../fonts/OverusedGrotesk/OverusedGrotesk-VF.woff2",
  weight: "300 900",
  variable: "--font-overused",
});

const Aspekta = localFont({
  src: "../fonts/Aspekta/AspektaVF.woff2",
  variable: "--font-aspekta",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MSLVN",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Overused.variable} ${Aspekta.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
