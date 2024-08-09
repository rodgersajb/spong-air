import Image from "next/image";
import logo from "../../../public/logo.JPG"

export default function Navbar() {
    return (
      <nav className="flex w-11/12 m-auto justify-between items-center h-32">
        <Image className="w-[200px] h-[140px]" src={logo} alt="logo" />
        <div className="flex justify-center items-center gap-2">
          <ul className="flex gap-6">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
          <button className="border-2 border-sky-950 p-2">Contact Us</button>
        </div>
      </nav>
    );
}