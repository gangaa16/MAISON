import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="grid min-h-150 grid-cols-1 overflow-hidden bg-[#e9e3d9] md:min-h-162.5 md:grid-cols-2 lg:min-h-180">
      <div className="flex items-center px-7 py-16 sm:px-12 lg:px-16 xl:px-24">
        <div className="max-w-xl">
          <p className="mb-6 text-xs tracking-[0.3em] text-[#827767]">
            THE NEW SEASON
          </p>

          <h1 className="font-serif text-5xl font-normal leading-[1.08] tracking-tight text-[#25251f] sm:text-6xl lg:text-7xl">
            Modern
            <br />
            Essentials
            <br />
            for Everyday
          </h1>

          <p className="mt-6 max-w-sm text-base leading-7 text-[#625d54]">
            Refined silhouettes, natural fabrics, and timeless pieces made to
            last.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#new-arrivals"
              className="border border-[#25251f] bg-[#25251f] px-7 py-4 text-xs tracking-[0.2em] text-white transition hover:bg-transparent hover:text-[#25251f]"
            >
              SHOP COLLECTION
            </Link>

           
          </div>
        </div>
      </div>

      <div className="relative min-h-105 overflow-hidden md:min-h-full">
        <Image
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1600&q=90"
          alt="Contemporary fashion editorial"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-[center_20%]"
        />

        <div className="absolute inset-0 bg-black/5" />
      </div>
    </section>
  );
}