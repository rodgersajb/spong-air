import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="max-h-80 bg-slate-800 text-rose-50 flex w-full justify-around pt-10 pb-10">
      <ul className="flex flex-col items-start gap-6 w-1/2">
        <li>
          <h2 className="text-3xl">Spongair</h2>
        </li>
        <li>
          <h5>A nice little description about the company and services</h5>
        </li>
        <li className="flex gap-4">
          <Link href="https://www.facebook.com">
            <FaFacebook />
          </Link>
          <Link href="https://www.twitter.com">
            <FaTwitter />
          </Link>
          <Link href="https://www.instagram.com">
            <FaInstagram />
          </Link>
        </li>
      </ul>
      <ul className="flex gap-8 w-1/4">
        <li className="flex flex-col gap-8">
          <h4 className="text-xl">Our Work</h4>
          <p>About</p>
          <p>Blog</p>
        </li>
        <li className="flex flex-col gap-8">
          <h4 className="text-xl">Contact</h4>

          <p>spong@sponair.com</p>

          <p>904-433-2322</p>
        </li>
      </ul>
    </footer>
  );
}
