"use client";



import { TbAirConditioning } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { LiaTemperatureLowSolid } from "react-icons/lia";

import ServiceCard from "./serviceCard";



const content = [
  {
    title: "Luxury HVAC Installation ",
    description:
      "High-end installations for custom homes, estates, and commercial spaces. Tailored systems to match architectural aesthetics, with premium equipment (e.g., top-tier brands like Trane, Carrier, or Lennox).",
    image: "/images/pexels-1.jpg",
    icon: <TbAirConditioning />,
  },
  {
    title: "Design & Consultation",
    description:
      "Bespoke design services, often in collaboration with architects and interior designers, to ensure that HVAC systems complement the luxury design of a home or business.",
    image: "/images/consult.jpg",
    icon: <MdDesignServices />,
  },
  {
    title: "Radiant Heating & Cooling Systems",
    description:
      "Installation of radiant heating and cooling systems for consistent temperature control without the use of forced air.",
    image: "/images/pexels-3.jpg",
    icon: <LiaTemperatureLowSolid />,
  },
];

export default function Services() {


  return (
    <main className="w-full">
      <section
        
        className="w-[95%] m-auto flex flex-col gap-4 overflow-scroll"
      >
        <h2 className="text-3xl font-semibold ">
          Luxury Climate Control Tailored to Your Home
        </h2>
        {content.map((item, index) => (
          <ServiceCard item={item} key={index} />
        ))}
      </section>
    </main>
  );
}
