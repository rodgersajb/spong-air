
import Image from "next/image";
// import { animate, motion } from "framer-motion";

// import { HiArrowSmRight } from "react-icons/hi";

// const fadeInAnimation = {
//   initial: { opacity: 0, y: 60 },
//   animate: {
//     opacity: 1,
//     y: 0,
//   },
// };

export default async function Header() {
  return (
    <header className="relative w-full h-screen flex flex-col justify-around pb-6 overflow-hidden">
      <Image
        src="/images/home-page-pic.jpg"
        alt="Background image"
        fill
        priority
        className=" object-cover"
      />

      <section className="relative z-45 flex flex-col items-center justify-end w-full p-8 text-center md:text-left">
        <div className="flex flex-col items-center mb-4">
          <h1
            // variants={fadeInAnimation}
            // initial="initial"
            // animate="animate"
            // transition={{ delay: 0.1, duration: 0.4 }}
            className="text-white text-4xl font-bold leading-tight lg:text-6xl "
          >
            Precision Work for Your Home.
          </h1>
          {/* <motion.button
            variants={fadeInAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mt-6 bg-spongBlue hover:bg-lightBrown text-white font-semibold py-3 px-6 rounded w-3/4 flex items-center justify-between lg:hidden"
          >
            Contact <HiArrowSmRight />
          </motion.button> */}
        </div>

        <p
          // variants={fadeInAnimation}
          // initial="initial"
          // animate="animate"
          // transition={{ delay: 0.1, duration: 0.4 }}
          className="text-white text-lg md:text-xl mt-4 max-w-xl font-semibold flex-end lg:text-2xl lg:max-w-4xl"
        >
          Your comfort is our priority. Expert HVAC solutions tailored for you.
        </p>
      </section>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10"></div>
    </header>
  );
}
