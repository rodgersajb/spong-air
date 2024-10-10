"use server";

import { Resend } from "resend";
import { validateString } from "./utils";
import EmailContact from "../email/email-contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const name = formData.get("name");
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!message || typeof message !== "string") {
    return {
      error: "Invalid Message",
    };
  }

  // Server-side validation

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid Email",
    };
  }

  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "rodgersajb@gmail.com",
    subject: "New Contact Form Submission",
    reply_to: senderEmail,    
    react: <EmailContact name={name} senderEmail={senderEmail} message={message} />,
  });
};
