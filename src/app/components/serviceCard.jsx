"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";

export default function ServiceCard({item}) {

     const ref = useRef(null);
     const isInView = useInView(ref,{ once: true, margin: "0px 0px -200px 0px" });

       useEffect(() => {
         if (isInView) {
           console.log(`${item.title} is in view`);
         }
       }, [isInView]);
    return (
    
      <motion.section
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className=""
      >
        <div className="flex items-center gap-2 py-4 text-spongDarkBlue font-semibold  ">
          <figure className="text-xl">{item.icon}</figure>
          <h3 className="text-lg  ">{item.title}</h3>
        </div>
        <figure className="relative h-[250px] w-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="rounded-2xl"
          />
        </figure>
        <div className="w-full md:w-1/2">
          <p className="text-sm text-spongGrey">{item.description}</p>
        </div>
      </motion.section>
    );
}