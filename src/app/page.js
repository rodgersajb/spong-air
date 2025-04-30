import Container from "./components/container";
import Header from "./components/header";
import Head from "next/head";
import Services from "./components/services";
import Testimonial from "./components/testimonial";
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
      
      <Services />
      <IndustriesSection />
      
      <section id="contact" className="bg-spongGrey">
        
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
          Need an install, repair, or consultation? Let’s talk.
        </p>
      <ContactForm />
      </section>
    </main>
  );
}
