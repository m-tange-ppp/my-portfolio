import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="after:block after:content-[''] after:h-16">
      <header className=" fixed top-0 left-0 w-full">
        <nav className="p-4 bg-gray-800 text-white flex justify-between items-center  ">
          <h1 className="text-2xl font-bold">m-tange-ppp&apos;s Portfolio</h1>
          <div className="space-x-4">
            <Link href="/" className="hover:text-slate-400">
              Home
            </Link>
            <Link href="/about" className="hover:text-slate-400">
              About
            </Link>
            <Link href="/portfolio" className="hover:text-slate-400">
              Portfolio
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
