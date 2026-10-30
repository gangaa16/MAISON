
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const categories = [
  {
    name: "Women",
    description: "Effortless everyday style",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    name: "Men",
    description: "Modern, timeless essentials",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Accessories",
    description: "The finishing touches",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Essentials",
    description: "Everyday pieces for your space",
    image:
      "https://images.unsplash.com/photo-1711060001575-2cfa3c5a2bfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

export default function CategorySection() {
  return (
    <section
      id="shop"
      className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24"
    >
      {/* Heading and rounded arrow */}
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-3 text-xs tracking-[0.2em] text-[#8b8173]">
            FIND YOUR STYLE
          </p>

          <h2 className="text-3xl font-light md:text-4xl">
            Shop by category
          </h2>
        </div>

        <Link
          href="#new-arrivals"
          aria-label="Explore all categories"
          className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#25251f]/30 transition-all duration-300 hover:bg-[#25251f] hover:text-white"
        >
          <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      {/* Category cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/categories/${category.name.toLowerCase()}`}
            className="group relative h-105 overflow-hidden bg-[#e8e4dc] sm:h-115"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 100%)",
              }}
            />

            <div className="absolute bottom-7 left-6 text-white">
              <h3 className="font-serif text-2xl">{category.name}</h3>

              <p className="mt-2 text-sm text-white/90">
                {category.description}
              </p>

              <p className="mt-5 inline-flex items-center gap-2 border-b border-white/70 pb-1 text-xs tracking-[0.15em]">
                SHOP NOW
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
