"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    // Frontend demonstration only; no email is stored or sent yet.
    setSubmitted(true);
  }

  return (
    <section
      id="newsletter"
      className="px-6 py-20 text-center md:py-28"
    >
      <p className="mb-4 text-xs tracking-[0.25em] text-[#8b8173]">
        STAY IN THE KNOW
      </p>

      <h2 className="text-3xl font-light md:text-4xl">
        A little note from us.
      </h2>

      <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#77746d]">
        Discover new arrivals, thoughtful edits, and inspiration for everyday
        living.
      </p>

      {submitted ? (
        <p className="mt-8 text-sm">
          Thank you! Newsletter registration will be available soon.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email address"
            required
            className="min-w-0 flex-1 border border-[#d6d2c9] bg-transparent px-5 py-4 text-sm outline-none focus:border-[#25251f]"
          />

          <button
            type="submit"
            className="bg-[#25251f] px-7 py-4 text-xs tracking-widest text-white transition hover:bg-[#45453d]"
          >
            SIGN UP
          </button>
        </form>
      )}
    </section>
  );
}