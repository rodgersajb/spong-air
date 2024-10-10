import Image from "next/image";

export default function Contact() {
  return (
    <main className="w-screen ">
      <header className="flex flex-col h-svh justify-center items-start relative bg-gradient-to-tr from-spongBlack to-spongWhite z-20">
        <h1 className="text-5xl pl-2 z-10 text-spongWhite">Contact Us</h1>

        <Image
          src="/images/air-conditioning.jpg"
          className="object-cover opacity-60 absolute inset-0 z-0 "
          fill
          alt="Air conditioning units"
        />
      </header>
      <form
        className="flex flex-col justify-center items-center w-80 py-2 m-auto gap-4"
        action=""
      >
        <div className="flex flex-col gap-4 items-start justify-start w-full ">
          <label className="font-bold text-lightBrown" htmlFor="name">
            Name *
          </label>
          <input
            type="text"
            placeholder="Name"
            className="border-gray-300 border-solid border-2 outline-none w-full p-1 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-4 items-start justify-start w-full  ">
          <label className="font-bold text-lightBrown" htmlFor="email">
            Email *
          </label>
          <input
            type="email"
            placeholder="Email"
            className="border-gray-300 border-solid border-2 outline-none w-full p-1 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-4 items-start justify-start w-full ">
          <label className="font-bold text-lightBrown" htmlFor="message">
            Message
          </label>
          <textarea
            placeholder="Message"
            className="border-gray-300 border-solid border-2 outline-none w-full p-1 rounded-sm"
          ></textarea>
        </div>
        <div className="flex flex-col items-start justify-start w-full ">
          <button className="bg-spongDarkBlue w-80 rounded-sm text-white py-2 px-4">Submit</button>
        </div>
      </form>
      <section className="bg-orange-100 h-[200px] flex">
        <ul className="flex w-1/2 m-auto justify-evenly items-center">
          <li className="flex flex-col gap-4">
            <h3 className="text-4xl">Phone</h3>
            <p>1 904-434-2334</p>
          </li>
          <li className="flex flex-col gap-4">
            <h3 className="text-4xl">Mail</h3>
            <p>spong@spongair.com</p>
          </li>
          <li className="flex flex-col gap-4">
            <h3 className="text-4xl">Address</h3>
            <p>Somewhere, CAN</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
