import Image from "next/image";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import ContactForm from "./components/contactForm";

export default async function Contact() {
  return (
    <main className="w-full ">
      <header className="flex flex-col h-svh justify-center items-start relative bg-gradient-to-tr from-spongBlack to-spongWhite z-20">
        <h1 className="text-5xl pl-2 z-10 text-spongWhite shadow-md">
          Contact Us
        </h1>

        <Image
          src="/images/air-conditioning.jpg"
          className="object-cover opacity-60 absolute inset-0 z-0 "
          fill
          priority
          alt="Air conditioning units"
        />
      </header>
      <section className="lg:flex lg:w-[95%] lg:m-auto  lg:justify-between lg:items-center lg:gap-10 lg:min-h-[500px]">
        <ContactForm />
        <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-between lg:items-start lg:h-[300px] lg:gap-4">
          <p className="text-spongDarkBlue w-2/3">
            Need guidance on the best HVAC solutions for your space? We’re here
            to answer questions, discuss financing, and support you every step
            of the way. Reach out today and start your journey to a comfortable
            home!
          </p>

          <ul className="text-spongBlue flex flex-col gap-4">
            <li className="text-2xl font-bold text-spongDarkBlue ">Social</li>
            <li className="text-xl flex gap-4">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </li>
            <li className="text-xl"></li>
            <li className="text-xl"></li>
          </ul>
          <figure className="relative h-[100px] w-[150px]">
            <Image
              src="/images/spong-logo.png"
              alt="Spong logo"
              fill
              className="object-contain"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
