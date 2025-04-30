"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="relative w-full h-screen flex flex-col justify-around pb-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Image
        src="/images/spong-header.webp"
        alt="Commercial ceiling and duct work view from below"
        fill
        priority
        className="object-cover brightness-75"
      />

      <section className="relative z-45 flex flex-col items-center justify-end w-full p-8 md:text-left">
        <div className="flex flex-col items-center justify-start mb-4 h-[30svh]">
          <h1 className="text-white text-2xl font-bold leading-tight lg:text-6xl text-center">
            Keeping You Cool, Comfortable, and Connected
          </h1>
          <h2 className="text-white text-lg md:text-xl mt-4 max-w-xl font-semibold flex-end lg:text-2xl lg:max-w-4xl text-center">
            HVAC, Gas, Refrigeration & Sheet Metal Solutions Designed to Last.
          </h2>
        </div>
      </section>
    </motion.header>
  );
}
