"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import { motion } from "framer-motion"; // Import motion from framer-motion

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Define motion variants for carousel items
const itemVariants = {
  initial: { opacity: 0, y: 20 }, // Start off-screen
  animate: { opacity: 1, y: 0 },   // End at the original position
  exit: { opacity: 0, y: 20 },      // Exit off-screen
  hover: { scale: 1.05 },           // Scale up on hover
};

export default function SpongCarousel() {
  return (
    <Carousel className="relative w-full overflow-hidden">
      <CarouselContent className="flex">
        <CarouselItem className="relative w-[80%] lg:w-[70%] flex-shrink-0 snap-start">
          <figure className="relative h-64 w-full">
            <Image
              src="/images/handyman.jpg"
              alt="HVAC technician installing a unit"
              fill
              className="object-cover"
            />
          </figure>
          <motion.div
            variants={itemVariants} // Apply the motion variants
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }} // Adjust duration for the transition
            className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50"
            whileHover="hover" // Trigger hover effect
          >
            <h2 className="text-2xl font-bold">Your Comfort, Our Priority</h2>
            <Link href="/about">
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200">
                About Us
              </button>
            </Link>
          </motion.div>
        </CarouselItem>

        <CarouselItem className="relative w-[80%] lg:w-[70%] flex-shrink-0 snap-start">
          <figure className="relative h-64 w-full">
            <Image
              src="/images/screwdriver-guy.jpg"
              alt="HVAC technician working with a screwdriver"
              fill
              className="object-cover"
            />
          </figure>
          <motion.div
            variants={itemVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50"
            whileHover="hover" // Trigger hover effect
          >
            <h2 className="text-2xl font-bold">Expert Services Tailored for You</h2>
            <Link href="/services">
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200">
                Our Services
              </button>
            </Link>
          </motion.div>
        </CarouselItem>

        <CarouselItem className="relative w-[80%] lg:w-[70%] flex-shrink-0 snap-start">
          <figure className="relative h-64 w-full">
            <Image
              src="/images/repairman.jpg"
              alt="HVAC unit"
              fill
              className="object-cover"
            />
          </figure>
          <motion.div
            variants={itemVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50"
            whileHover="hover" // Trigger hover effect
          >
            <h2 className="text-2xl font-bold">Get in Touch with Us</h2>
            <Link href="/contact">
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 z-10" />
      <CarouselNext className="absolute right-0 z-10" />
    </Carousel>
  );
}
