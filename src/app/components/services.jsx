"use client";

import { TbAirConditioning } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import {FaHouseChimney, FaBuilding, FaSchool, FaIndustry } from "react-icons/fa";



const industries = [
  { title: "Residential", icon: "house" },
  { title: "Commercial", icon: "building" },
  { title: "Institutional", icon: "school" },
  { title: "Industrial", icon: "industry" },
];

export default function Services() {
  return (
    <main className="w-full">
      <section className=" m-auto flex flex-col gap-4 overflow-scroll">
        
        <h3>
          Whether you're a homeowner or managing large-scale facilities, we have
          the expertise to deliver trusted HVAC, gas, and refrigeration
          solutions.
        </h3>
        {/* SERVICES SECTION */}
        <section className="py-16 bg-spongGrey text-center">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
            {[
              {
                title: "HVAC Systems",
                desc: "Heating, ventilation, and air conditioning solutions for any size project.",
              },
              {
                title: "Sheet Metal",
                desc: "Custom ductwork, enclosures, and structural fabrication.",
              },
              {
                title: "Gas Fitting",
                desc: "Certified gas line installations, inspections, and hookups.",
              },
              {
                title: "Refrigeration",
                desc: "Reliable refrigeration design, installation, and maintenance.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-6 border rounded-lg hover:shadow-lg transition odd:text-spongBlue"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INDUSTRIES SECTION */}
        <section className="py-16 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-4">
            {["Residential", "Commercial", "Institutional", "Industrial"].map(
              (industry) => (
                <div key={industry} className="p-6 border rounded-lg bg-white">
                  <h4 className="text-lg font-semibold">{industry}</h4>
                </div>
              )
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
