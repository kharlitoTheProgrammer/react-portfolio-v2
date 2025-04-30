const expItem = [
  {
    date: "Feb 2025 - Present",
    title: "Front-end Developer Intern - Department of Education",
    description:
      "Contributed to the development of the School account feature using Vue by integrating APIs for data retrieval and submission. Assisted in setting up client-side routing and building responsive user interfaces with Tailwind CSS, enhancing the overall functionality and user experience of the Special Order Application.",
  },
  {
    date: "2024 - 2025",
    title: "Full Stack Android Developer (Capstone) - R.Sarabia Optical",
    description:
      "A mobile AR-based system for R. Sarabia Optical that lets users virtually try on eyeglass frames and book in-store appointments, enhancing convenience and customer engagement.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="space-y-5 mt-15">
      <h2 className="text-3xl text-[#A79A86]">Experience</h2>
      {expItem.map((item) => (
        <div className="text-left p-2 lg:flex" key={item.date}>
          <p className="text-[#A79A86] opacity-70 lg:w-full">{item.date}</p>
          <div className="lg:w-2xl xl:w-7xl flex flex-col gap-2">
            <span className="text-[#A79A86] lg:text-2xl">{item.title}</span>
            <p className="text-md text-[#A79A86] opacity-60">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
