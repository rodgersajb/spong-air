"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { useInView, motion, animate } from "framer-motion";

const fadeInAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: 0.6 * index,
  }),
};


export default function ServiceList({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  useEffect(() => {
    if (isInView) {
      console.log(`we can see is in view`);
    }
  }, [isInView]);

  return (
    <motion.main
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="flex flex-col  items-stretch w-[95%] m-auto justify-evenly bg-spongGrey lg:min-h-[350px] rounded-xl  "
    >
      <motion.div className="flex flex-col gap-12 w-[90%] m-auto   ">
        <motion.figure className="bg-spongWhite w-9 grid place-items-center py-2 rounded-xl">
          {service.icon}
        </motion.figure>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xl "
        >
          {service.service}
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-[75%] font-thin"
        >
          {service.description}
        </motion.p>
      </motion.div>
      {/* <figure className="relative h-[250px] w-[250px] first:w-[450px] ">
        <Image
          src={service.image}
          alt={service.service}
          fill
          className="rounded-2xl object-cover aspect-square"
        />
      </figure> */}
    </motion.main>
  );
}
