"use client";

import Link from "next/link";

export default function Navbar() {
    return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div className="text-xl font-bold">Janna Portfolio</div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
    )
}