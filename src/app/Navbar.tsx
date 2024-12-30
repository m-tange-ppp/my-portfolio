import Link from "next/link";
import React from "react";

async function Navbar() {
  const navItems: { name: string; href: string }[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <div className="after:block after:content-[''] after:h-[88px] min-[430px]:after:h-16">
      <header className=" fixed top-0 left-0 w-full z-50">
        <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold">
            <Link href="/">m-tange-ppp&apos;s Portfolio</Link>
          </h1>
          <ul className="space-x-4 flex">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className={"hover:text-slate-400"}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
