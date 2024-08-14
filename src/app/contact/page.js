import Image from "next/image";


export default function Contact() {
  return (
    <main className="w-full flex flex-col gap-10">
      <header className="flex flex-col justify-center gap-10 items-center">
        <h1 className="text-6xl">Contact Us</h1>

        <Image
          src="/images/air-conditioning.jpg"
          height={400}
          width={800}
          alt="Air conditioning units"
          className="object-cover"
        />
      </header>
      <form
        className="flex flex-col justify-center items-center w-1/3 m-auto gap-4"
        action=""
      >
        <div className="flex flex-col gap-4 items-start justify-start w-full ">
          <label className="font-bold" htmlFor="name">
            Name *
          </label>
          <input
            type="text"
            placeholder="Name"
            className="border-gray-300 border-solid border-2 outline-none w-full p-1"
          />
        </div>
        <div className="flex flex-col gap-4 items-start justify-start w-full  ">
          <label className="font-bold" htmlFor="email">
            Email *
          </label>
          <input
            type="email"
            placeholder="Email"
            className="border-gray-300 border-solid border-2 outline-none w-full p-1"
          />
        </div>
        <div className="flex flex-col gap-4 items-start justify-start w-full ">
          <label className="font-bold" htmlFor="message">
            Message
          </label>
          <textarea
            placeholder="Message"
            className="border-gray-300 border-solid border-2 outline-none w-full p-1"
          ></textarea>
        </div>
        <div className="flex flex-col items-start justify-start w-full ">
          <button className="bg-black text-white py-2 px-4">Submit</button>
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
