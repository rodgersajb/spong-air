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

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const pathname = usePathname();
  return (
    
     

      
      <main className="pb-16">
        <nav className="fixed top-0 z-50 w-screen ">
          <div className=" flex w-full items-center justify-between z-40  h-16">
            <figure className="">
              <Link href="/">
                <Image
                  className=""
                  width={60}
                  height={40}
                  src="/images/Spongair-logo.JPG"
                  alt="logo"
                />
              </Link>
            </figure>
            <div className="pr-2 z-40">
              <button
                onClick={toggleMenu}
                className=" text-2xl  focus:outline-none "
              >
                {openMenu ? <IoClose /> : <RxHamburgerMenu />}
              </button>
            </div>
          </div>
          <ul
            className={` min-h-svh w-full  flex flex-col justify-evenly items-center bg-slate-800 bg-opacity-75 origin-top z-30 ${
              openMenu ? " animate-open-menu " : " animate-close-menu h-0"
            }`}
          >
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={`text-white ${
                  pathname === link.href ? "sm:text-sky-950" : "sm:text-sky-200"
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

 {
   /* <nav className="hidden sm:flex sm:w-11/12 sm:m-auto sm:justify-between sm:items-center sm:h-32">
        <Link href="/">
          <Image
            className=""
            width={180}
            height={100}
            src="/images/Spongair-logo.JPG"
            alt="logo"
          />
        </Link>
        <div className="sm:flex sm:justify-center sm:items-center sm:gap-2">
          <ul className="sm:flex sm:gap-6">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={`${
                  pathname === link.href ? "sm:text-sky-950" : "sm:text-sky-950"
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
         
        </div>
      </nav> */
 }