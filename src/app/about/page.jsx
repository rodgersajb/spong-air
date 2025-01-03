import Image from "next/image";
import Link from "next/link";

export default async function AboutPage() {
  return (
    <main className="w-full  bg-spongWhite text-spongWhite font-semibold  ">
      <header className="h-svh flex flex-col bg-gradient-to-l from-spongWhite to-spongBlack relative">
        <div className="z-20 flex flex-col justify-center gap-4 pl-4 h-full items-center ">
          <h1 className="text-6xl font-semibold z-20 shadow-md">About Us</h1>
          <div>
            <h2 className="text-spongGrey text-3xl font-normal ">
              Expert Care.
            </h2>
            <h2 className="text-spongGrey text-3xl font-normal ">
              Total Comfort.
            </h2>
          </div>
        </div>
      </header>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10"></div> */}

      <Image
        src="/images/handyman.jpg"
        className="object-cover z-1 opacity-80 brightness-60"
        fill
        priority
        alt="HVAC technician installing a unit"
        
      />

      <section className="w-screen m-auto py-4 bg-spongWhite text-spongBlack font-normal flex flex-col gap-4 min-[400px]">
        <p className=" text-sm w-80 m-auto text-center lg:text-lg">
          Our expert team works closely with you, ensuring every installation
          and maintenance task is done with care and precision. We take pride in
          our craftsmanship, creating a comfortable and stress-free environment
          for you and your family. Choose Spongair for unmatched comfort.
        </p>
        <article className=" w-[95%] m-auto flex flex-col gap-4 pt-8">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            Our business is built on <span className="text-spongDarkBlue">three core pillars.</span>
          </h1>
          <figure className="relative h-[300px] w-full">
            <Image
              src="/images/screwdriver-guy.jpg"
              fill
              alt="HVAC technician working with a screwdriver"
              className="aspect-square object-cover rounded-xl"
            />
          </figure>
          <h3 className="border-b-2 lg:border-b border-spongBrown pb-2 lg:text-2xl lg:w-1/2">
            {" "}
            Precision Craftsmanship
          </h3>
          <p className="text-sm font-light lg:w-1/2 lg:text-lg">
            At Spongair, every HVAC system we install or maintain is treated
            with the utmost care and attention to detail. Our team of experts
            ensures that every component functions at its best, providing your
            home with efficient and reliable climate control. We pride ourselves
            on delivering high-end solutions that exceed expectations.
          </p>
          <figure className="relative h-[300px] w-full">
            <Image
              src="/images/repairman.jpg"
              fill
              alt="HVAC unit"
              className="aspect-square object-cover rounded-xl"
            />
          </figure>
          <h3 className="border-b-2 pb-2 lg:border-b lg:border-spongBrown lg:text-2xl lg:w-1/2">
            Customer-Centered Solutions
          </h3>
          <p className="text-sm font-light lg:w-1/2 lg:text-lg">
            We believe in personalized service tailored to your unique needs.
            From initial consultation to project completion, our focus remains
            on ensuring your total comfort and satisfaction. Our team listens,
            advises, and creates HVAC solutions that suit your lifestyle,
            providing peace of mind throughout the process.
          </p>
          <figure className="relative h-[300px] w-full">
            <Image
              src="/images/measuring-tape.jpg"
              fill
              alt="HVAC unit"
              className="aspect-square object-cover rounded-xl"
            />
          </figure>
          <h3 className="border-b-2 pb-2 lg:text-2xl lg:border-b lg:border-spongBrown lg:w-1/2">
            Sustainability and Efficiency
          </h3>
          <p className="text-sm font-light lg:w-1/2 lg:text-lg ">
            Our commitment to the environment drives us to offer
            energy-efficient solutions that reduce your carbon footprint while
            enhancing comfort. We integrate cutting-edge technology and
            sustainable practices into every project, ensuring that your home
            not only feels great but is also eco-friendly and cost-effective.
          </p>

          <p className="text-sm font-light lg:text-center lg:text-xl lg:w-1/2 lg:m-auto lg:font-semibold lg:py-20">
            Have questions? We're here to help! Contact Us today, and our expert
            team will provide the guidance you need.
          </p>
          <button className="bg-spongDarkBlue mb-4 text-spongWhite font-semibold w-32 m-auto py-2 px-4 rounded-sm transform transition-transform ease-in-out duration-300 hover:translate-y-2 cursor-pointer">
            <Link href="/contact">Contact Us</Link>
          </button>
        </article>
      </section>
    </main>
  );
}
