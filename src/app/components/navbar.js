// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import MobileNavbar from "./mobilenavbar";


// const navLinks = [
//   {
//     href: "/",
//     label: "Home",
//   },
//   {
//     href: "/about",
//     label: "About",
//   },
//   {
//     href: "/services",
//     label: "Services",
//   },
//   {
//     href: "/posts",
//     label: "Posts",
//   },
//   {
//     href: "/contact",
//     label: "Contact",
//   },
// ];


// export default function Navbar() {
//  const pathname = usePathname();
//   return (
//     <>
    
//       <nav className="hidden sm:flex sm:w-11/12 sm:m-auto sm:justify-between sm:items-center sm:h-32">
//         <Link href="/">
//           <Image
//             className=""
//             width={180}
//             height={100}
//             src="/images/Spongair-logo.JPG"
//             alt="logo"
//           />
//         </Link>
//         <div className="sm:flex sm:justify-center sm:items-center sm:gap-2">
//           <ul className="sm:flex sm:gap-6">
//             {navLinks.map((link) => (
//               <li
//                 key={link.href}
//                 className={`${
//                   pathname === link.href ? "sm:text-sky-950" : "sm:text-sky-950"
//                 }`}
//               >
//                 <Link href={link.href}>{link.label}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//       {/* <MobileNavbar /> */}
     
//     </>
//   );  
// }

//  {
   
//  }