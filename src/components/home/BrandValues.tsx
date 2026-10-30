const values = [
  {
    number: "01",
    title: "Thoughtful Design",
    description: "Considered details. Pieces made to last.",
  },
  {
    number: "02",
    title: "Quality First",
    description: "Everyday essentials with a premium feel.",
  },
  {
    number: "03",
    title: "Timeless Style",
    description: "Less trend. More personal expression.",
  },
];

export default function BrandValues() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-3 md:px-10 md:py-20">
      {values.map((value) => (
        <div key={value.number} className="text-center">
          <p className="mb-4 text-xs tracking-widest text-[#9b8e7b]">
            {value.number}
          </p>

          <h2 className="mb-3 text-lg">{value.title}</h2>

          <p className="text-sm leading-6 text-[#77746d]">
            {value.description}
          </p>
        </div>
      ))}
    </section>
  );
}