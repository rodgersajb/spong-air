
import Image from "next/image";

import ContactForm from "./components/contactForm";

export default async  function Contact() {
  return (
    <main className="w-screen ">
      <header className="flex flex-col h-svh justify-center items-start relative bg-gradient-to-tr from-spongBlack to-spongWhite z-20">
        <h1 className="text-5xl pl-2 z-10 text-spongWhite">Contact Us</h1>

        <Image
          src="/images/air-conditioning.jpg"
          className="object-cover opacity-60 absolute inset-0 z-0 "
          fill
          alt="Air conditioning units"
        />
      </header>
      <ContactForm  />
      <section className="bg-orange-100 h-[200px] flex">
        <ul className="flex w-1/2 m-auto justify-evenly items-center">
          <li className="flex flex-col gap-4">
            <h3 className="text-4xl">Phone</h3>
            <p>1 904-434-2334</p>
          </li>
          <li className="flex flex-col gap-4">
            <h3 className="text-4xl">Mail</h3>
            <p>spong@spongair.com</p>
          </li>
          <li className="flex flex-col gap-4">
            <h3 className="text-4xl">Address</h3>
            <p>Somewhere, CAN</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
