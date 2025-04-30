import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-svw pt-4 text-spongWhite">
      <figure className="relative h-[200px] w-full">
        <Image
          src="/images/spong-logo.png"
          alt="SpongAir Logo"
          fill
          className="m-auto"
        />
      </figure>
      <section className="bg-spongDarkBlue flex flex-col items-center justify-center py-8">
        <ul className=" flex gap-4 w-[95%] m-auto py-4 ">
          <li className="text-xl">
            <FaInstagram />
          </li>
        </ul>
        <div className="w-[95%] m-auto flex flex-col items-center ">
          <p className="flex">
            Copyright
            <FaRegCopyright className="h-6 " />
            2024. Spongair Mechanical.
          </p>
          <p> All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
}
