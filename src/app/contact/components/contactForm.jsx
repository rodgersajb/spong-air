"use client"

import SubmitButton from "./submitButton";
import { sendEmail } from "@/app/actions/actions";

export default function ContactForm() {
    return (
      <form
        action={async (formData) => {
          await sendEmail(formData);
        }}
        className="flex flex-col justify-center items-center w-80 py-2 m-auto gap-4"
      >
        <div className="flex flex-col gap-4 items-start justify-start w-full ">
          <label className="font-bold text-lightBrown" htmlFor="name">
            Name *
          </label>
          <input
            type="text"
            name="name"
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
            name="email"
            placeholder="Email"
            className="border-gray-300 border-solid border-2 outline-none w-full p-1 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-4 items-start justify-start w-full ">
          <label className="font-bold text-lightBrown" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Message"
            className="border-gray-300 border-solid border-2 outline-none w-full p-1 rounded-sm"
          ></textarea>
        </div>
        <div className="flex flex-col items-start justify-start w-full ">
         <SubmitButton />
        </div>
      </form>
    );
}