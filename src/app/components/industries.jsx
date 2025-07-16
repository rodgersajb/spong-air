import Image from "next/image";

const industries = [
  
  {
    title: "Design Build",
    image: "/images/FullSizeRender.webp",
  },
  {
    title: "Industrial",
    image: "/images/Industry.webp",
  },
  {
    title: "Residential",
    image: "/images/Industrial.webp",
  },
];

export default function IndustriesSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
      <div className="text-center mb-8 lg:col-span-3">
        <p className="uppercase text-spongDarkGrey tracking-wider text-sm font-medium mb-2">
          Industries
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-spongBlue">
          We Serve
        </h2>
      </div>
      {industries.map((industry, index) => (
        <figure
          key={index}
          className="relative w-full h-[200px] sm:h-[250px] lg:h-[300px] overflow-hidden rounded-2xl shadow-xl group"
        >
          <Image
            src={industry.image}
            alt={industry.title}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <figcaption className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h3 className="text-white text-xl font-bold tracking-wide drop-shadow-lg text-center">
              {industry.title}
            </h3>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
