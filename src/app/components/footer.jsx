import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-svw bg-spongDarkBlue py-4 bg-gradient-to-b from-spongDarkBlue to-spongWhite text-spongWhite">
      <ul className="flex flex-col w-96 m-auto gap-2 py-4">
        <li className="border-b border-spongGrey text-spongWhite pb-2">
          <Link href="/about">About</Link>
        </li>
        <li className="border-b border-spongGrey text-spongWhite pb-2">
          <Link href="/services">Services</Link>
        </li>
        <li className="border-b border-spongGrey text-spongWhite pb-2">
          <Link href="/posts">Posts</Link>
        </li>
        <li className="border-b border-spongGrey text-spongWhite pb-2">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <h4 className="w-96 m-auto font-semibold text-lg ">Follow</h4>
      <ul className=" flex gap-2 w-96 m-auto py-4 ">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
      <figure className="relative w-full h-44">
        <Image
          src="/images/spong-logo.png"
          alt="logo"
          className="w-20 m-auto" 
          fill
          objectFit="contain"
        />
      </figure>
    </footer>
  );
}
