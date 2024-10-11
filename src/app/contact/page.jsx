
import Image from "next/image";

import ContactForm from "./components/contactForm";

export default async  function Contact() {
  return (
    <main className="w-full ">
      <header className="flex flex-col h-svh justify-center items-start relative bg-gradient-to-tr from-spongBlack to-spongWhite z-20">
        <h1 className="text-5xl pl-2 z-10 text-spongWhite shadow-md">Contact Us</h1>

        <Image
          src="/images/air-conditioning.jpg"
          className="object-cover opacity-60 absolute inset-0 z-0 "
          fill
          priority
          alt="Air conditioning units"
        />
      </header>
      <ContactForm  />
      
    </main>
  );
}
