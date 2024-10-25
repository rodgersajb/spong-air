"use client";

import Image from "next/image";
import splitWordsAndCharacters from "@/utils/splitStringRegex";
import { motion, variants } from "framer-motion";
import { once } from "events";

const heading = `Our commitment to quality and comfort`;
const text = `At SpongAir, we believe in putting people first. We are 
passionate about creating comfortable spaces for you and your 
family. Every job we do reflects our dedication to quality, honesty,
 and exceptional service. Our skilled team works tirelessly to ensure your heating and cooling systems run perfectly.
 
 `;
 

const characterVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

export default function Container() {
  const headingWords = splitWordsAndCharacters(heading);
  const textWords = splitWordsAndCharacters(text);
  




  return (
    <main className="w-full py-8">
      <div className="w-screen m-auto flex justify-evenly ">
        <div className="flex flex-col items-start gap-4 justify-evenly w-[95%] m-auto py-8">
          <motion.h2
            initial="hidden"
            whileInView="reveal"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.02 }}
            className="text-4xl w-[95%] m-auto border-l-8 border-spongBlue pl-4"
          >
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2 font-bold"
                transition={{ duration: 0.5 }}
              >
                {word.map((char, i) => (
                  <motion.span
                    key={i}
                    variants={characterVariants}
                    className="inline-block "
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="reveal"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.02 }}
            className="w-[95%] m-auto lg:w-1/2 lg:m-0 lg:pl-4"
          >
            {textWords.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                transition={{ duration: 0.05 }}
              >
                {word.map((char, i) => (
                  <motion.span
                    key={i}
                    variants={characterVariants}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.p>
          

         
        
        </div>
      </div>
    </main>
  );
}
