import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-svw bg-spongDarkBlue py-4 text-spongWhite">
      <ul className="flex flex-col w-[95%] m-auto gap-2 py-4">
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
      <ul className=" flex gap-4 w-[95%] m-auto py-4 ">
        <li className="text-xl">
          <FaFacebook />
        </li>
        <li className="text-xl">
          <FaTwitter />
        </li>
        <li className="text-xl">
          <FaInstagram />
        </li>
      </ul>
      <div className="w-[95%] m-auto ">
        <h4 className="flex gap-1">
          Copyright
          <FaRegCopyright className="h-6 " />
          2024. Spongair Mechanical. All rights reserved.
        </h4>
      </div>
    </footer>
  );
}
