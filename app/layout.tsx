import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Quicksand, Geist } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Animelist",
  description: "hahahaha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${geistSans.variable} antialiased`}>
        <Navbar/>
        <div className="justfy justify-center p-14">
          {children}
        </div>
      </body>
    </html>
  );
}
