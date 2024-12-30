import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "m-tange-ppp's Portfolio",
  description: "m-tange-pppによる創作物",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="mx-auto my-4 max-w-[450px] flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
