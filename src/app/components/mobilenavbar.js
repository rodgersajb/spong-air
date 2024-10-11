"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";

import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

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
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default function MobileNavbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

   

  return (
    <main className="w-svw fixed top-0 left-0 z-50 overflow-x-hidden ">
      <nav className="fixed top-0 z-50 w-svw backdrop-blur-sm  ">
        <div className=" flex w-full items-center justify-between z-40  h-16">
          <figure className="relative h-12 w-20 z-50">
            <Link href="/">
              <Image
                className="opacity-85"
                fill
                src="/images/spong-logo.png"
                alt="logo"
              />
            </Link>
          </figure>
          <div className="pr-2 z-50 sm:hidden">
            <button
              onClick={toggleMenu}
              className=" text-2xl focus:outline-none "
            >
              {openMenu ? (
                <IoClose className="text-spongBlue" />
              ) : (
                <RxHamburgerMenu className=" text-spongWhite" />
              )}
            </button>
          </div>
        </div>
        <ul
          className={` min-h-svh w-full absolute top-0 right-0 flex flex-col justify-center gap-6 items-center bg-gradient-to-b from-slate-100 to-lightBrown origin-right z-49 sm:block  ${
            openMenu ? " animate-open-menu " : " animate-close-menu h-0"
          }`}
        >
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`text-spongBlue uppercase font-semibold ${
                pathname === link.href ? "sm:text-sky-950" : "sm:text-sky-950"
              }`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
