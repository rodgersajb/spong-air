import Image from "next/image";
import screwdriver from "../../../public/screwdriver.jpg";
import handyman from "../../../public/handyman.jpg";
import tools from "../../../public/tools.jpg";
import repairman from "../../../public/repairman.jpg";

export default function Container() {
  return (
    <>
      <Image
        className="aspect-video object-cover h-[600px]"
        src={screwdriver}
        alt="HVAC technician with screwdriver"
      />

      <ul className="w-1/2 min-h-60 m-auto flex items-center justify-evenly">
        <li className="flex flex-col gap-2">
          <h5 className="text-4xl">1.</h5>
          <h5>Expert Service</h5>
        </li>
        <li className="flex flex-col gap-2">
          <h5 className="text-4xl">100%</h5>
          <h5>Satisfaction Guaranteed</h5>
        </li>
        <li className="flex flex-col gap-2">
          <h5 className="text-4xl">5 Star</h5>
          <h5>Top Rated</h5>
        </li>
      </ul>
      <div className="w-2/3 m-auto flex justify-evenly gap-12">
        <Image
          className="object-square h-[400px] w-[400px]"
          src={handyman}
          alt="HVAC technician with screwdriver"
        />
        <div className="flex flex-col items-start justify-evenly w-1/2">
          <h2 className="text-4xl">Our Commitment to Quality and Comfort</h2>
          <p>
            At our HVAC company, we believe in putting people first. We’re
            passionate about creating comfortable spaces for you and your
            family. Every job we do reflects our dedication to quality, honesty,
            and exceptional service.
          </p>
          <p>
            Our skilled team works tirelessly to ensure your heating and cooling
            systems run perfectly. We take pride in our work and strive to
            exceed your expectations every time. Your comfort is our top
            priority!
          </p>
          <button className="b-2 bg-orange-300 p-2">Contact Us!</button>
        </div>
      </div>
      <main className="pt-28 flex items-center flex-col">
        <h1 className="text-6xl">Our Services</h1>
        <div>
          <ul className="m-auto w-2/3 flex justify-between pt-10 pb-10">
            <li className="flex flex-col items-center gap-4">
              <h3 className="text-2xl">AC Installation</h3>
              <p className="text-center text-lg">
                Stay cool with our expert AC installation! We ensure perfect
                sizing and placement for maximum comfort in your home.
              </p>
              <button className="text-bold underline">Learn More!</button>
            </li>
            <li className="flex flex-col items-center gap-4">
              <h3 className="text-2xl">Heating Repair</h3>
              <p className="text-center text-lg">
                Donʼt let the cold get to you! Our skilled team quickly repairs
                your heating system to keep your home warm and cozy.
              </p>
              <button className="text-bold underline">Get Help!</button>
            </li>
            <li className="flex flex-col items-center gap-4">
              <h3 className="text-2xl">Air Quality</h3>
              <p className="text-center text-lg">
                Breathe easy! Our air quality services remove pollutants,
                ensuring your home is safe and fresh for your family.
              </p>
              <button className="text-bold underline">Improve Air!</button>
            </li>
          </ul>
        </div>
      </main>
      <aside>
        <Image
          className="aspect-video object-cover h-[600px]"
          src={tools}
          alt="HVAC tools"
        />
      </aside>
      <section className="flex items-center justify-between w-3/4 m-auto pt-20 pb-20">
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="text-4xl">
            Don’t just take our word for it! Hear from our satisfied customers
            who trust us for their HVAC needs. Their stories show our commitment
            to quality and service.
          </h2>
          <p className="text-xl">
            "I’m so impressed! The team arrived on time and fixed my AC quickly.
            Now my home is the perfect temperature. Highly recommend their
            service!
          </p>
          <p className="font-bold">- Sarah Thompson</p>
          <p className="text-xl">
            "Fantastic service! They repaired my heater on the spot and were so
            friendly. I feel safe and warm now. I wouldnʼt trust anyone else
            with my HVAC needs! "
          </p>
          <p className="font-bold">- John Martinez</p>
        </div>
        <div className="w-full">
          <Image className="  object-contain h-[600px]" src={repairman} alt="HVAC technician with screwdriver" />
        </div>
      </section>
    </>
  );
}
