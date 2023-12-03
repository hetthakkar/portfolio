"use client";

import { useFormState } from "react-dom";
import Submit from "./Submit";
import { submitForm } from "@/utils/actions";

export default function ContactForm() {
  return (
    <form action={submitForm}>
      <div className="flex flex-col">
        <label htmlFor="name" className="hidden">
          Your name
        </label>
        <input
          type="text"
          id="name"
          required
          name="name"
          className="w-full bg-grayBg shadow-md border border-gray-300 text-gray-200 rounded-lg p-2 mb-8"
          placeholder="Your name"
        />
        <label htmlFor="email" className="hidden">
          Your email
        </label>
        <input
          type="email"
          required
          id="email"
          name="email"
          className="w-full bg-grayBg shadow-md border border-gray-300 text-gray-200 rounded-lg p-2 mb-8"
          placeholder="Your email"
        />
        <label htmlFor="message" className="hidden">
          Your message
        </label>
        <textarea
          id="message"
          required
          name="message"
          className="w-full bg-grayBg shadow-md border border-gray-300 text-gray-200 rounded-lg p-2"
          placeholder="Your message"
        />
        <div className="w-full mt-8">
          <Submit />
        </div>
      </div>
    </form>
  );
}
