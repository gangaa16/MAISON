import Image from "next/image";
import Link from "next/link";

export default function EditorialSection() {
  return (
    <section id="story" className="grid grid-cols-1 bg-[#eeece6] md:grid-cols-2">
      <div className="relative h-112.5 overflow-hidden md:h-150 lg:h-170">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=90"
          alt="A carefully curated fashion space"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>

      <div className="flex items-center px-8 py-16 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-lg">
          <p className="mb-5 text-xs tracking-[0.25em] text-[#8b8173]">
            THE MAISON PHILOSOPHY
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-5xl">
            A little less,
            <br />
            a little better.
          </h2>

          <p className="mt-6 text-sm leading-7 text-[#68655e]">
            We believe personal style is not about having more. It is about
            choosing pieces that feel right, work together, and stay with you
            beyond a single season.
          </p>

          <Link
            href="#shop"
            className="mt-8 inline-block border-b border-[#25251f] pb-2 text-xs tracking-[0.2em]"
          >
            OUR APPROACH →
          </Link>
        </div>
      </div>
    </section>
  );
}