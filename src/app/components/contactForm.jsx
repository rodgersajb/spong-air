"use client";
import { useRef } from "react";
import SubmitButton from "./submitButton";
import { sendEmail } from "@/app/actions/actions";
import toast from "react-hot-toast";

export default function ContactForm() {
  const ref = useRef(null);
  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();
        try {
          await sendEmail(formData);
          toast.success("Email sent successfully");
        } catch (error) {
          toast.error("Something went wrong while sending the email");
        }
      }}
      className="flex flex-col justify-center items-center w-80 py-8 m-auto gap-4"
      aria-labelledby="contact-form-title"
    >
      <h2 id="contact-form-title" className="sr-only">
        Contact Form
      </h2>

      <div className="flex flex-col gap-4 items-start justify-start w-full">
        <label className="font-bold text-spongBlue" htmlFor="name">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          aria-required="true"
          className="border-2 border-spongWhite focus:border-spongDarkBlue outline-none w-full p-1 rounded-sm"
        />
      </div>

      <div className="flex flex-col gap-4 items-start justify-start w-full">
        <label className="font-bold text-spongBlue" htmlFor="email">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          aria-required="true"
          className="border-2 border-spongWhite focus:border-spongDarkBlue outline-none w-full p-1 rounded-sm"
        />
      </div>

      <div className="flex flex-col gap-4 items-start justify-start w-full">
        <label className="font-bold text-spongBlue" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          className="border-2 border-spongWhite focus:border-spongDarkBlue outline-none w-full p-1 rounded-sm"
        ></textarea>
      </div>

      <div className="flex flex-col items-start justify-start w-full">
        <SubmitButton />
      </div>
    </form>
  );
}
