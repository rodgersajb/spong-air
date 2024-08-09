import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";

import airconditioning from "../../public/airconditioning.jpg";

export default function Contact() {
  return (
    <>
      <Navbar />
      <header>
        <h1>Contact Us</h1>
        <aside>
          <Image src={airconditioning} alt="Air conditioning units" />
        </aside>
      </header>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Name" />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" />
        <label htmlFor="message">Message</label>
        <textarea placeholder="Message"></textarea>
        <button>Submit</button>
      </form>
      <section>
        <ul>
          <li>
            <h3>Phone</h3>
            <p>1 904-434-2334</p>
          </li>
          <li>
            <h3>Mail</h3>
            <p>spong@spongair.com</p>
          </li>
          <li>
            <h3>Address</h3>
            <p>Somewhere, CAN</p>
          </li>
        </ul>
      </section>

      <Footer />
    </>
  );
}
