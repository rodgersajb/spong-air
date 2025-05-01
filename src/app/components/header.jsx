"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MobileNavbar from "./mobilenavbar";

export default function Header() {
  return (
    <motion.header
      className="relative w-full h-svh flex flex-col justify-around pb-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <MobileNavbar />
      <Image
        src="/images/spong-header.webp"
        alt="Commercial ceiling and duct work view from below"
        fill
        priority
        className="object-cover brightness-75"
      />

      <section className="relative z-45 h-[40%] flex flex-col items-start justify-center w-full p-8 ">
        <h1 className="text-white text-2xl font-bold leading-tight lg:text-6xl ">
          Keeping You Cool, Comfortable, and Connected
        </h1>
        <h2 className="text-white text-lg md:text-xl mt-4 max-w-xl font-semibold flex-end lg:text-2xl lg:max-w-4xl ">
          HVAC, Gas, Refrigeration & Sheet Metal Solutions Designed to Last.
        </h2>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-block border m-auto border-white text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-300 hover:bg-white hover:text-spongBlue"
        >
          Get In Touch
        </motion.a>
      </section>
    </motion.header>
  );
}
