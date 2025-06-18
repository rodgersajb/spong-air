"use client";

import { motion } from "framer-motion";
import { MdOutlineHvac, MdBuild, MdGasMeter, MdAcUnit } from "react-icons/md";

const services = [
  {
    title: "HVAC Systems",
    desc: "Heating, ventilation, and air conditioning solutions for any size project.",
    icon: <MdOutlineHvac className="text-4xl text-spongBlue mb-4" />,
  },
  {
    title: "Sheet Metal",
    desc: "Custom fabrication, design and install to meet SMACNA requirements.",
    icon: <MdBuild className="text-4xl text-spongBlue mb-4" />,
  },
  {
    title: "Gas Fitting",
    desc: "Certified gas line installations, inspections, and hookups.",
    icon: <MdGasMeter className="text-4xl text-spongBlue mb-4" />,
  },
  {
    title: "Refrigeration",
    desc: "Reliable refrigeration design, installation, and maintenance.",
    icon: <MdAcUnit className="text-4xl text-spongBlue mb-4" />,
  },
];

export default function Services() {
  return (
    <main className="w-full bg-spongGrey">
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase text-spongDarkGrey tracking-wider text-sm font-medium mb-2">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-spongBlue">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-spongDarkBlue">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
