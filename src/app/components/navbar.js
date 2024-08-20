"use client"
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/posts",
    label: "Posts",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex w-11/12 m-auto justify-between items-center h-32">
      <Link href="/">
        <Image
          className=""
          width={180}
          height={100}
          src="/images/Spongair-logo.JPG"
          alt="logo"
        />
      </Link>
      <div className="flex justify-center items-center gap-2">
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`${
                pathname === link.href ? "text-sky-950" : "text-sky-950"
              }`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <button className="border-2 border-sky-950 p-2">Contact Us</button>
      </div>
    </nav>
  );
}
