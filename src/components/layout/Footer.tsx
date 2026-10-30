"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const footerGroups = [
  {
    title: "EXPLORE",
    links: [
      { label: "Shop", href: "#shop" },
      { label: "New Arrivals", href: "#new-arrivals" },
      { label: "Our Story", href: "#story" },
    ],
  },
  {
    title: "HELP",
    links: [
      { label: "Contact", href: "#newsletter" },
      { label: "Shipping", href: "#newsletter" },
      { label: "Returns", href: "#newsletter" },
    ],
  },
];

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#25251f] px-6 py-14 text-white md:px-10 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-3">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="text-2xl tracking-[0.25em]">
            MAISON
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
            Thoughtful pieces for a more considered everyday.
          </p>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-5 text-xs tracking-[0.2em]">
              {group.title}
            </h3>

            <ul className="space-y-4">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/15 pt-6 text-xs text-white/50">
        © {year ?? "2026"} MAISON. Portfolio project.
      </div>
    </footer>
  );
}