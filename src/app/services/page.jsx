"use client";
import Image from "next/image";
import { animate, motion } from "framer-motion";

const fadeInAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const imageAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col gap-10 w-full">
      <h1 className="text-6xl text-center">Our Services</h1>
      <figure className="min-h-[400px] w-full">
        <motion.div
          initial="initial"
          animate="animate"
          variants={imageAnimation}
          className="relative w-full h-[400px]"
        >
          <Image
            src="/images/equipment.jpg"
            className="w-full h-[400px] object-cover  "
            fill
            alt="HVAC technician with screwdriver"
          />
        </motion.div>
      </figure>
      <section className="w-4/5 m-auto flex items-center justify-center gap-20">
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{
            once: true,
          }}
          className="flex flex-col gap-6 w-1/3"
        >
          <h2 className="text-3xl">AC Installation</h2>
          <p>
            Stay cool and comfortable with our expert AC installation. We ensure
            your system is set up perfectly for your home. Enjoy refreshing air
            all summer long. Trust us for a seamless experience from start to
            finish!
          </p>
          <p>
            Our skilled team handles everything with care and precision. We use
            top-notch equipment and follow best practices for a long-lasting
            system. Plus, our friendly service means youʼre never alone. Let us
            help you enjoy the perfect indoor climate today!
          </p>
        </motion.div>
        <figure>
          <Image
            src="/images/lego-guy.jpg"
            height={400}
            width={400}
            alt="Air conditioning units"
            className="object-cover"
          />
        </figure>
      </section>
      <section className="w-4/5 m-auto flex items-center justify-center gap-20 ">
        <figure>
          <Image
            src="/images/measuring-tape.jpg"
            height={400}
            width={400}
            alt="Air conditioning units"
            className="object-cover aspect-square"
          />
        </figure>
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{
            once: true,
          }}
          className="flex flex-col gap-6 w-1/3"
        >
          <h2 className="text-3xl">Heating Repair</h2>
          <p>
            Is your heater acting up? Don’t worry! Our heating repair service is
            here to save the day. We quickly diagnose issues and bring warmth
            back to your home. Stay cozy this winter with our dependable and
            efficient repairs!
          </p>
          <p>
            Our experienced team uses the latest tools to ensure your heating
            system runs smoothly. We pride ourselves on quick response times and
            clear communication. Trust us to restore comfort to your home so you
            can relax and enjoy the season!
          </p>
        </motion.div>
      </section>
      <section className="w-4/5 m-auto flex items-center justify-center gap-20 ">
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{
            once: true,
          }}
          className="flex flex-col gap-6 w-1/3"
        >
          <h2 className="text-3xl">Maintenance Plans</h2>
          <p>
            Keep your HVAC system running smoothly with our maintenance plans.
            Regular check-ups prevent costly repairs and ensure your home stays
            comfortable all year round!
          </p>
          <p>
            Join our plan today for peace of mind and enjoy priority service
            whenever you need it. Your comfort matters!
          </p>
          <p>
            Our expert technicians will catch small issues before they become
            big problems. Sign up and enjoy a worry-free HVAC experience. Stay
            comfortable, no matter the season!
          </p>
        </motion.div>
        <figure>
          <Image
            src="/images/screwdriver-guy.jpg"
            height={400}
            width={400}
            alt="Air conditioning units"
            className="object-cover aspect-square"
          />
        </figure>
      </section>
      <section className="w-full min-h-[200px] flex items-center bg-amber-200">
        <div className="w-3/5 m-auto flex items-center justify-between">
          <h2 className="text-4xl">Get in Touch with Our HVAC Experts!</h2>
          <button className="border-2 border-gray-800 py-2 px-4">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
