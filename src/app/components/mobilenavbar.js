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
import { FaInstagram, FaRegCopyright } from "react-icons/fa";

const navLinks = [
  { href: "#", label: "Home", icon: <HiHomeModern /> },
  { href: "#services", label: "Services", icon: <MdBuild /> },
  { href: "#industries", label: "Industries We Serve", icon: <BiInfoSquare /> },

  {
    href: "https://www.instagram.com/spongair?igsh=MjZjdHNyMjl2bnVq",
    label: "Instagram",
    icon: <FaInstagram />,
  },
];

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index },
  }),
};

export default function MobileNavbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  function handleLinkClick(event, href) {
    if (href.startsWith("#")) {
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navbarHeight = 110; // adjust based on your actual fixed navbar height
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = targetPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }

      // If you have a state toggle for mobile menu (like React useState)
      // You would call: setOpenMenu(false);
    }
  }

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <main className="w-full fixed top-0 left-0 z-50 overflow-x-hidden">
      {/* Desktop Nav */}
      <nav className="hidden lg:flex w-full bg-spongWhite items-center justify-between px-4">
        <figure className="relative h-[110px] w-[220px]">
          <Link href="/">
            <Image
              className="object-contain drop-shadow-lg contrast-125"
              fill
              src="/images/spong-logo.png"
              alt="Spongair logo"
            />
          </Link>
        </figure>
        <ul className="flex gap-8 text-lg font-semibold text-spongBlue">
          {navLinks.slice(0, 4).map((link, index) => (
            <li key={index} onClick={(e) => handleLinkClick(e, link.href)}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a
          onClick={(e) => handleLinkClick(e, "#contact")}
          href="#contact"
          className="bg-spongBlue text-spongWhite font-semibold py-4 px-8 rounded"
        >
          Contact Us
        </a>
      </nav>

      {/* Mobile Nav */}
      <nav className="fixed top-0 w-full lg:hidden bg-spongWhite z-50">
        <div className="flex w-full items-center justify-between h-16 pr-4">
          <figure className="relative h-16 w-28">
            <Link href="/">
              <Image
                className="drop-shadow-lg contrast-125"
                fill
                src="/images/spong-logo.png"
                alt="Spongair logo"
              />
            </Link>
          </figure>
          <button
            onClick={toggleMenu}
            className="text-2xl z-50"
            aria-label="menu toggle"
          >
            {openMenu ? (
              <IoClose className="text-spongBlue" />
            ) : (
              <RxHamburgerMenu className="text-spongBlue" />
            )}
          </button>
        </div>

        {/* Slide-Out Menu */}
        <ul
          className={`absolute top-0 right-0 w-full min-h-screen bg-spongWhite flex flex-col justify-center gap-6 items-start px-4 transition-all duration-300 ease-in-out ${
            {
              true: "translate-x-0",
              false: "-translate-x-full",
            }[openMenu]
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
              className="text-spongDarkBlue uppercase font-semibold flex items-center gap-2"
            >
              <span>{link.icon}</span>
              <a href={link.href} onClick={handleLinkClick} className="text-lg">
                {link.label}
              </a>
            </motion.li>
          ))}
          {/* <li className="pt-4 text-sm text-spongGrey">
            <span className="flex items-center gap-1">
              Copyright <FaRegCopyright className="inline-block" /> 2024.
              Spongair Mechanical. All rights reserved.
            </span>
          </li> */}
        </ul>
      </nav>
    </main>
  );
}
