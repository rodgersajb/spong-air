"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";

export default function ServiceList({ service }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  useEffect(() => {
    if (isInView) {
      console.log(`we can see is in view`);
    }
  }, [isInView]);

  return (
    <main className="flex odd:flex-row-reverse w-[95%] m-auto justify-between  ">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-[45%] flex flex-col justify-center rounded-xl bg-spongWhite  gap-8 relative after:content-[''] after:absolute after:h-[100%] after:w-[105%] after:bg-spongBlue after:-top-10 after:-right-10 after:rounded-xl after:-z-10 "
      >
        <h2 className="text-3xl">{service.service}</h2>
        <p>{service.description}</p>
      </motion.div>
      <figure className="relative w-[45%] h-[300px]" >
        <Image
          src={service.image}
          alt={service.description}
          fill
          className="rounded-2xl object-cover"
        />
      </figure>
    </main>
  );
}
