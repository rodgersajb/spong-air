"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { useInView, motion, animate } from "framer-motion";




export default function ServiceList({ service }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  useEffect(() => {
    if (isInView) {
      console.log(`we can see is in view`);
    }
  }, [isInView]);

  return (

      <motion.div className="flex flex-col items-center gap-12 w-[90%] m-auto   ">
        <motion.figure className="bg-spongWhite w-14 grid place-items-center py-4 absolute -top-5 m- rounded-xl">
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
  
    
  );
}
