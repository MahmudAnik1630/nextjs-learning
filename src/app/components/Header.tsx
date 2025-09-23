"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Blog", path: "/Blog" },
    { name: "Profile", path: "/Profile" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <header className="w-full bg-gray-900 text-white p-4 shadow-md">
      <nav className="flex justify-center gap-6">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => router.push(item.path)}
            className="hover:text-yellow-400 transition"
          >
            {item.name}
          </button>
        ))}
      </nav>
    </header>
  );
}
