"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";

import { motion } from "framer-motion";

import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiHomeModern } from "react-icons/hi2";
import { BiInfoSquare } from "react-icons/bi";
import { MdBuild } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegNewspaper } from "react-icons/fa";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";

const navLinks = [
  {
    href: "/",
    label: "Home",
    icon: <HiHomeModern />,
  },
  {
    href: "/about",
    label: "About",
    icon: <BiInfoSquare />,
  },
  {
    href: "/services",
    label: "Services",
    icon: <MdBuild />,
  },
  {
    href: "/posts",
    label: "Posts",
    icon: <FaRegNewspaper />,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: <HiOutlineMail />,
  },

  {
    href: "www.facebook.com",
    label: "spongair",
    icon: <FaFacebook />,
  },
  {
    href: "www.twitter.com",
    label: "@spongair",
    icon: <FaTwitter />,
  },
  {
    href: "www.instagram.com",
    label: "@spongair",
    icon: <FaInstagram />,
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};
export default function MobileNavbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLinkClick = () => {
    setOpenMenu(false);
  };

  return (
    <main className="w-svw fixed top-0 left-0 z-50 overflow-x-hidden ">
      <nav className="hidden lg:flex w-full bg-spongWhite items-center justify-between px-4 ">
        <figure className="relative h-[70px] w-[110px]">
          <Link href="/">
            <Image
              className=" drop-shadow-lg contrast-125"
              fill
              src="/images/spong-logo.png"
              alt="logo"
            />
          </Link>
        </figure>
        <ul className="flex gap-8 text-lg font-semibold text-spongBlue">
          {navLinks.slice(0,4).map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <Link className="bg-spongBlue text-spongWhite font-semibold py-4 px-2 rounded-sm" href="/contact">Contact Us</Link>
      </nav>
      <nav className="fixed top-0 z-50 w-svw backdrop-blur-md bg-gradient-to-r from-spongWhite lg:hidden ">
        <div className=" flex w-full items-center justify-between z-40  h-16">
          <figure className="relative h-12 w-20 z-50">
            <Link href="/">
              <Image
                className=" drop-shadow-lg contrast-125"
                fill
                src="/images/spong-logo.png"
                alt="logo"
              />
            </Link>
          </figure>
          <div className="pr-2 z-50 lg:hidden">
            <button
              id="menu-toggle"
              aria-label="menu toggle"
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
          className={` min-h-svh w-full bg-spongWhite absolute top-0 right-0 flex flex-col justify-center gap-6 items-start origin-right z-49   ${
            openMenu ? " animate-open-menu " : " animate-close-menu h-0"
          }`}
        >
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              className={`text-spongDarkBlue uppercase font-semibold flex items-center pl-4 gap-2 ${
                pathname === link.href ? "sm:text-sky-950" : "sm:text-sky-950"
              }`}
            >
              <figure>{link.icon}</figure>
              <Link href={link.href} onClick={handleLinkClick}>
                {link.label}
              </Link>
            </motion.li>
          ))}
          <li className="pl-4 w-[95%] relative before:content-[''] before:absolute before:h-[2px] before:w-[95%]  before:bg-spongWhite before:-top-[10px] ">
            <h4 className="flex gap-1 text-spongGrey ">
              Copyright
              <FaRegCopyright className="h-6 " />
              2024. Spongair Mechanical. All rights reserved.
            </h4>
          </li>
        </ul>
      </nav>
    </main>
  );
}
