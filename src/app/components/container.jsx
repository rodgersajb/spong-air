"use client";

import Image from "next/image";
import splitStringRegex from "@/utils/splitStringRegex";
import { motion, variants } from "framer-motion";

const heading = `Our Commitment to Quality and Comfort`;
const text = `At our HVAC company, we believe in putting people first. We are
passionate about creating comfortable spaces for you and your
family. Every job we do reflects our dedication to quality, honesty,
and exceptional service.`;

const characterVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};



export default function Container() {
  const headingCharacters = splitStringRegex(heading);
  const textCharacters = splitStringRegex(text);

  console.log('simple split', text.split('')
  
)
  console.log(headingCharacters);
  console.log(textCharacters);

  return (
    <main className="w-full">
      {/* <figure className="min-h-[400px] w-full relative">

          <Image
            className="aspect-video object-cover "
            src="/images/screwdriver.jpg"
            fill
            alt="HVAC technician with screwdriver"
          />
        
      </figure> */}

      <div className="w-full m-auto flex justify-evenly ">
        <div className="flex flex-col items-start justify-evenly w-[95%] m-auto">
          
            <motion.h2
              initial="hidden"
              whileInView="reveal"
              transition={{ staggerChildren: .02 }}
              className="text-4xl"
            >
              {headingCharacters.map((char) => (
                <motion.span
                  key={char}
                  transition={{ duration: 0.5 }}
                  variants={characterVariants}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p initial="hidden" whileInView="reveal" transition={{ staggerChildren: .02}}>
              {textCharacters.map((char) => (
                <motion.span
                  key={char}
                  transition={{ duration: 0.5 }}
                  variants={characterVariants}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          
          <p>
            Our skilled team works tirelessly to ensure your heating and cooling
            systems run perfectly. We take pride in our work and strive to
            exceed your expectations every time. Your comfort is our top
            priority!
          </p>
          <button className="b-2 bg-orange-300 p-2">Contact Us!</button>
        </div>
      </div>
      <main className="pt-28 flex items-center flex-col">
        <h1 className="text-6xl">Our Services</h1>
        <div>
          <ul className="m-auto w-2/3 flex justify-between pt-10 pb-10">
            <li className="flex flex-col items-center gap-4">
              <h3 className="text-2xl">AC Installation</h3>
              <p className="text-center text-lg">
                Stay cool with our expert AC installation! We ensure perfect
                sizing and placement for maximum comfort in your home.
              </p>
              <button className="text-bold underline">Learn More!</button>
            </li>
            <li className="flex flex-col items-center gap-4">
              <h3 className="text-2xl">Heating Repair</h3>
              <p className="text-center text-lg">
                Donʼt let the cold get to you! Our skilled team quickly repairs
                your heating system to keep your home warm and cozy.
              </p>
              <button className="text-bold underline">Get Help!</button>
            </li>
            <li className="flex flex-col items-center gap-4">
              <h3 className="text-2xl">Air Quality</h3>
              <p className="text-center text-lg">
                Breathe easy! Our air quality services remove pollutants,
                ensuring your home is safe and fresh for your family.
              </p>
              <button className="text-bold underline">Improve Air!</button>
            </li>
          </ul>
        </div>
      </main>
      <figure className="min-h-[400px] w-full">
        <div className="relative w-full h-[400px]">
          <Image
            className="aspect-video object-cover "
            src="/images/tools.jpg"
            fill
            alt="HVAC tools"
          />
        </div>
      </figure>

      <section className="flex items-center justify-between w-3/4 m-auto py-28 gap-20">
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="text-4xl">
            Don’t just take our word for it! Hear from our satisfied customers
            who trust us for their HVAC needs. Their stories show our commitment
            to quality and service.
          </h2>
          <p className="text-xl">
            "I’m so impressed! The team arrived on time and fixed my AC quickly.
            Now my home is the perfect temperature. Highly recommend their
            service!
          </p>
          <p className="font-bold">- Sarah Thompson</p>
          <p className="text-xl">
            "Fantastic service! They repaired my heater on the spot and were so
            friendly. I feel safe and warm now. I wouldnʼt trust anyone else
            with my HVAC needs! "
          </p>
          <p className="font-bold">- John Martinez</p>
        </div>
        <div className="w-full">
          <Image
            className="  object-contain "
            height={600}
            width={600}
            src="/images/repairman.jpg"
            alt="HVAC technician with screwdriver"
          />
        </div>
      </section>
    </main>
  );
}
