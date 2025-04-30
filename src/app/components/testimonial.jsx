// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import Autoplay from "embla-carousel-autoplay";

// const carouselItems = [
//   {
//     image: "/images/pexels-2.jpg",
//     alt: "Image of an HVAC employee fixing an air conditioning unit",
//     quote:
//       "SpongAir is the best! They fixed my AC in no time and now it's working better than ever.",
//     person: "John Dortherton",
//   },
//   {
//     image: "/images/pexels-4.jpg",
//     alt: "Image of a HVAC employee fixing a furnace outside",
//     quote:
//       "I called SpongAir to fix my furnace and they did an amazing job. I highly recommend them.",
//     person: "Billy Matheson",
//   },
//   {
//     image: "/images/pexels-5.jpg",
//     alt: "Image of a HVAC employee fixing a furnace outside a building complex",
//     quote:
//       "SpongAir is the best HVAC company in town. They fixed my furnace in no time.",
//     person: "Eddie Johnson",
//   },
// ];

// export default function Testimonial() {
//   return (
//     <main className="w-full">
//       <h1 className="text-3xl text-center py-20">
//         What{" "}
//         <span className="text-spongDarkBlue font-bold relative before:content-[''] before:absolute before:w-7/12 before:h-[2px] before:bg-spongBlue before:bottom-0 before:left-0 before:right-0 ">
//           our clients
//         </span>{" "}
//         say
//       </h1>
//       <Carousel
//         plugins={[
//           Autoplay({
//             delay: 8000,
//           }),
//         ]}
//       >
//         <CarouselContent>
//           {carouselItems.map((item, index) => (
//             <CarouselItem key={index}>
//               <figure className="relative h-[300px] w-full">
//                 <Image
//                   src={item.image}
//                   alt={item.alt}
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute bottom-10 flex flex-col items-center justify-center left-0 right-0 rounded-2xl bg-spongWhite min-h-[100px] w-80 m-auto z-40">
//                   <p className="px-2 text-xs text-spongBlack font-light text-center">
//                     <ImQuotesLeft className="text-lg" />

//                     {item.quote}
//                     <span className="flex w-full justify-end">
//                       <ImQuotesRight className="text-lg" />
//                     </span>
//                   </p>
//                   <p className="font-semibold text-spongBlue">{item.person}</p>
//                 </div>
//               </figure>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>
//       <section className="py-12 bg-spongWhite text-center">
//         <div className="w-[90%] max-w-2xl mx-auto">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Need an install, repair, or consultation? Let’s talk.
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }
