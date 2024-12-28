import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <header>
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
          <h1 className="text-2xl font-bold">m-tange-ppp&apos;s Portfolio</h1>
          <div className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
