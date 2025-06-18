import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-svw pt-4 text-spongWhite  flex flex-col items-center">
      <figure className="relative h-[100px] w-2/3 ">
        <Image
          src="/images/spong-logo.png"
          alt="SpongAir Logo"
          fill
          className="m-auto object-contain"
        />
      </figure>
      <section className="text-spongDarkBlue flex flex-col items-center justify-center ">
       
        <Link href="https://www.instagram.com/spongair?igsh=MjZjdHNyMjl2bnVq" className="cursor-pointer text-xl">
          <FaInstagram />
        </Link>
        <div className=" m-auto flex flex-col items-center ">
          <p className="flex">
            Copyright
            <FaRegCopyright className="h-6 " />
            2025. Spongair Mechanical.
          </p>
          <p> All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
}
