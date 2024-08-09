import Image from "next/image";


export default function Header() {
  return (
    <header className="w-full min-h-72 flex flex-col items-center justify-center ">
      <div className="w-full flex flex-col items-center justify-center gap-6">
        <h1 className="text-xl">Stay Comfortable Year-Round with Our HVAC Experts!</h1>
        <h4>
          Our team ensures your home stays cozy in winter and cool in summer.
          Trust us for fast, reliable HVAC services you can count on!
        </h4>
        <button className="border-slate-950 border-2 p-2">Get Started!</button>
      </div>
    </header>
  );
}
