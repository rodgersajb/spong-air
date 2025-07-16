import Header from "./components/header";
import Head from "next/head";
import Services from "./components/services";

import ContactForm from "./components/contactForm";
import IndustriesSection from "./components/industries";

export default async function Home() {
  return (
    <main className="w-full">
      <Head>
        <title>Spongair Mechanical</title>
      </Head>
      {/* <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="robots" content={data.robots} />
        <meta name="keywords" content={data.keywords} />
        <meta name="author" content={data.author} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head> */}
      <Header />
      <section id="services">
        <Services />
      </section>
      <section id="industries">
        <IndustriesSection />
      </section>
      <section id="contact" className="bg-spongGrey pt-4">
        <div className="text-center py-4">
          <p className="uppercase text-spongDarkGrey tracking-wider text-sm font-medium mb-2">
            Installation, repair, or maintenance? Let’s talk.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-spongBlue">
            Contact Us
          </h2>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
