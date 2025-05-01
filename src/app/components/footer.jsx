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
          className="m-auto"
        />
      </figure>
      <section className="text-spongDarkBlue flex flex-col items-center justify-center ">
        <ul className=" flex gap-4  m-auto py-4 ">
          <li className="text-xl">
            <FaInstagram />
          </li>
        </ul>
        <div className=" m-auto flex flex-col items-center ">
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
