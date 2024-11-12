"use client";
import Image from "next/image";
import { animate, motion } from "framer-motion";
import Link from "next/link";
import { GiPaperPlane } from "react-icons/gi";
import ServiceList from "./components/serviceList";

import { FaThermometerHalf } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { WiWindy } from "react-icons/wi";
import { PiPipeWrenchBold } from "react-icons/pi";
import { AiOutlineAlert } from "react-icons/ai";
import { FaLeaf } from "react-icons/fa";




const imageAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const services = [
  {
    service: "HVAC System Installation",
    description:
      "Expert installation of high-efficiency heating, ventilation, and air conditioning systems tailored to fit the unique needs of each space, ensuring optimal performance and energy savings.",
    icon: <FaThermometerHalf size={24} color="#143452" />,
  },
  {
    service: "Preventive Maintenance",
    description:
      "Comprehensive maintenance services that include detailed inspections, cleaning, and fine-tuning to keep HVAC systems running smoothly, extend their lifespan, and prevent unexpected breakdowns.",
    icon: <FaScrewdriverWrench size={24} color="#655853" />,
  },
  {
    service: "Indoor Air Quality Solutions",
    description:
      "Customized air filtration and purification solutions designed to enhance indoor air quality, reduce allergens, and promote a healthier environment for homes and businesses.",
    icon: <WiWindy size={24} color="1e4055" />,
  },
  {
    service: "Ductwork Design and Installation",
    description:
      "Precise ductwork design and installation focused on maximizing airflow and energy efficiency, using quality materials and expert craftsmanship for seamless integration into any building layout.",
    icon: <PiPipeWrenchBold size={24} color="#143452" />,
  },
  {
    service: "Emergency HVAC Repair",
    description:
      "Rapid and reliable emergency repair services available 24/7 to address unexpected HVAC issues, ensuring minimal downtime and restoring comfort as quickly as possible.",
    icon: <AiOutlineAlert size={24} color="#655853" />,
  },
  {
    service: "Energy Efficiency Consultation",
    description:
      "Professional assessments and recommendations to improve energy efficiency in HVAC systems, helping clients reduce energy costs and achieve a more eco-friendly home or business.",
    icon: <FaLeaf size={24} color="1e4055" />,
  },
];


export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <header className="h-svh flex items-center justify-center ">
        <h1 className="text-6xl text-center z-40 text-spongWhite shadow-md">
          Our Services
        </h1>
        <Image
          src="/images/equipment.jpg"
          fill
          alt="HVAC technician with screwdriver"
          priority
          className="brightness-80 opacity-90 object-cover "
        />
        <div className="absolute inset-0 bg-black opacity-30 z-30"></div>
      </header>
      <section className="w-[95%] m-auto  py-4 lg:pt-10">
        <h2 className="text-3xl lg:w-1/2">
          Our{" "}
          <span className="relative text-spongBrown font-semibold ">
            expertise and cutting-edge
            <Image
              src="/images/arrow-5.svg"
              height={400}
              width={400}
              alt="Arrow pointing right"
              className="hidden lg:block absolute -top-[70px] right-0 left-0 "
            />
          </span>{" "}
          technology ensure your HVAC systems are{" "}
          <span className="font-bold text-spongBlue pr-1">efficient,</span>
          <span className="italic text-spongBrown ">reliable,</span>
          and{" "}
          <span className="font-semibold text-spongDarkBlue  relative before:content-[''] before:absolute before:h-[2px] before:w-full before:bg-spongDarkBlue before:bottom-0 ">
            prepared
          </span>{" "}
          for any climate.
        </h2>

        <h4 className="text-xl pt-8 font-semibold lg:text-2xl ">
          What We <span className="text-spongBlue">Provide.</span>
        </h4>
      </section>
      <section className="grid grid-cols-3 grid-rows-2 gap-4 items-center w-[95%] m-auto">
        {services.map((service, index) => (
          <ServiceList key={index} service={service} />
        ))}
       
      </section>
      <section className=" flex flex-col items-center justify-center gap-8 py-4">
        <h2 className="text-3xl text-spongDarkBlue ">Questions?</h2>
        <p className="w-[90%] m-auto text-center text-spongDarkBlue font-semibold">
          Feel free to reach out with any questions you may have.
        </p>

        <Link
          className="bg-spongLightBrown text-spongBrown px-4 py-2 rounded-md flex items-center justify-between font-semibold w-1/2 "
          href="/contact"
        >
          Contact <GiPaperPlane />
        </Link>
      </section>
    </main>
  );
}
