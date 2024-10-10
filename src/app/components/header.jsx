"use client";
import Image from "next/image";
import { animate, motion } from "framer-motion";

const fadeInAnimation = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function Header() {
  return (
    <header className="relative w-full h-screen flex flex-col justify-around pb-6 overflow-hidden">
      <Image
        src="/images/home-page-pic.jpg"
        alt="Background image"
        fill
        objectFit="cover"
        className="opacity-80" // Adjust opacity if needed
      />

      <div className="absolute inset-0">
        {/* Gradient overlay for improved text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-black opacity-60"></div>

        {/* White gradient overlay for logo visibility */}
      </div>

      <section className="relative z-45 flex flex-col items-center justify-end w-full p-8 text-center md:text-left">
        <div className="flex items-center mb-4">
          <motion.h1
            variants={fadeInAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1, duration: 1 }}
            className="text-white text-4xl l font-bold leading-tight shadow-md"
          >
            Precision Work for Your Home
          </motion.h1>
        </div>
        <motion.p
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1, duration: 1 }}
          className="text-white text-lg md:text-xl mt-4 max-w-xl font-semibold"
        >
          Your comfort is our priority. Expert HVAC solutions tailored for you.
        </motion.p>
        <motion.button
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 bg-spongBlue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-200"
        >
          Get Started
        </motion.button>
      </section>
    </header>
  );
}
