"use client";
import Image from "next/image";
import { animate, motion } from "framer-motion";

const fadeInAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: 0.1 * index,
  }),
};

const imageAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const services = [
  {
    category: "Heating Services",
    arrow: "/images/pppointed-1.svg",
    items: [
      {
        title: "Furnace Installation and Replacement",
        description: "New system installations and old system replacements.",
      },
      {
        title: "Furnace Repair",
        description: "Diagnosis and repair of heating issues.",
      },
      {
        title: "Furnace Maintenance",
        description: "Regular maintenance and tune-ups to ensure efficiency.",
      },
    ],
  },
  {
    category: "Cooling Services",
    arrow: "/images/pppointed-2.svg",
    items: [
      {
        title: "Air Conditioning Installation",
        description:
          "Installing new air conditioning systems, including central AC and ductless mini-splits.",
      },
      {
        title: "Air Conditioning Repair",
        description: "Troubleshooting and fixing cooling issues.",
      },
      {
        title: "Air Conditioning Maintenance",
        description: "Seasonal check-ups to keep systems running efficiently.",
      },
    ],
  },
  {
    category: "Indoor Air Quality Solutions",
    arrow: "/images/pppointed-1.svg",
    items: [
      {
        title: "Air Purification Systems",
        description: "Installation of air purifiers and filtration systems.",
      },
      {
        title: "Humidity Control",
        description:
          "Dehumidifiers and humidifiers to manage indoor humidity levels.",
      },
      {
        title: "Duct Cleaning",
        description:
          "Cleaning and sanitizing air ducts to improve air quality.",
      },
    ],
  },
  {
    category: "Ventilation Services",
    arrow: "/images/pppointed-2.svg",
    items: [
      {
        title: "Ventilation System Installation",
        description: "Installing proper ventilation for homes and businesses.",
      },
      {
        title: "Exhaust Fan Installation",
        description:
          "Installing kitchen and bathroom exhaust fans to improve airflow.",
      },
      {
        title: "Energy Recovery Ventilators",
        description:
          "Systems that improve indoor air quality while reducing energy costs.",
      },
    ],
  },
  {
    category: "Emergency HVAC Services",
    arrow: "/images/pppointed-1.svg",
    items: [
      {
        title: "24/7 Emergency Repairs",
        description:
          "Immediate assistance for heating or cooling failures outside regular business hours.",
      },
    ],
  },
  {
    category: "Energy Efficiency Services",
    arrow: "/images/pppointed-2.svg",
    items: [
      {
        title: "Energy Audits",
        description:
          "Assessing homes or buildings to identify energy-saving opportunities.",
      },
      {
        title: "System Upgrades",
        description:
          "Recommendations for more efficient systems or improvements.",
      },
    ],
  },
  {
    category: "Smart Home Integration",
    arrow: "/images/pppointed-1.svg",
    items: [
      {
        title: "Thermostat Installation",
        description:
          "Smart thermostats that optimize heating and cooling based on user habits.",
      },
      {
        title: "Home Automation Systems",
        description: "Integration of HVAC with other smart home technologies.",
      },
    ],
  },
  {
    category: "Commercial HVAC Services",
    arrow: "/images/pppointed-2.svg",
    items: [
      {
        title: "Commercial System Installation",
        description: "HVAC solutions tailored for commercial spaces.",
      },
      {
        title: "Maintenance Contracts",
        description:
          "Regular maintenance services for commercial HVAC systems.",
      },
      {
        title: "Custom Solutions",
        description:
          "HVAC design and installation for unique commercial needs.",
      },
    ],
  },
  {
    category: "Financing Options",
    arrow: "/images/pppointed-1.svg",
    items: [
      {
        title: "Flexible Payment Plans",
        description:
          "Information on financing options for installations and repairs.",
      },
      {
        title: "Rebates and Incentives",
        description:
          "Guidance on available rebates for energy-efficient systems.",
      },
    ],
  },
  {
    category: "Customer Support",
    arrow: "/images/pppointed-2.svg",
    items: [
      {
        title: "Consultation Services",
        description: "Free consultations to discuss HVAC needs and options.",
      },
      {
        title: "Warranty Information",
        description: "Details on service warranties and guarantees.",
      },
    ],
  },
  {
    category: "Blog/Resources",
    items: [
      {
        title: "Maintenance Tips",
        description: "Articles or guides on how to maintain HVAC systems.",
      },
      {
        title: "Seasonal Checklists",
        description: "Seasonal maintenance checklists for homeowners.",
      },
    ],
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
          className="brightness-80 opacity-90 object-cover"
        />
      </header>
      <section className="w-[95%] m-auto">
        <h2 className="text-3xl font-semibold">
          Our expertise and cutting-edge technology ensure your HVAC systems are
          efficient, reliable, and prepared for any climate.
        </h2>
        <div></div>
        <h4 className="text-xl pt-8 font-semibold relative before:content-[''] before:absolute before:h-[2px] before:w-[25%] before:right-0 before:left-0 before:bg-spongBlue before:bottom-0">
          What We <span className="text-spongBlue">Provide.</span>
        </h4>
        <ul className="">
          {services.map((service, index) => (
            <li key={index} className="py-4 relative">
              <h3 className="text-2xl font-semibold border-l-8 border-spongBlue pl-2">
                {service.category}
              </h3>
              <ul className="flex flex-col  ">
                {service.items.map((item, index) => (
                  <motion.li
                    key={index}
                    className="p-2 even:bg-spongGrey even:rounded-lg even:text-spongBlack odd:text-spongDarkBlue last:relative"
                    variants={imageAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={index}
                  >
                    <h4 className="text-xl font-semibold ">{item.title}</h4>
                    <p className="text-spongBlack">{item.description}</p>
                  </motion.li>
                ))}
                <figure className="relative h-[200px] flex -z-1">
                  <Image
                    src={service.arrow}
                    fill
                    alt="Arrow pointing right"
                    className="absolute top-0 -right-25 -z-1"
                  />
                </figure>
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
