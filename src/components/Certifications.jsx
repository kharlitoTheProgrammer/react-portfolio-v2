const certificates = [
  {
    date: "June 16, 2023",
    title: "Responsive Web Design",
    author: "freeCodeCamp",
  },
  {
    date: "December 7, 2023",
    title: "The Complete 2023 Web Development Bootcamp",
    author: "Dr. Angela Yu (Udemy)",
  },
  {
    date: "December 11, 2023",
    title: "JavaScript Essentials 1",
    author: "Cisco Networking Academy",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="space-y-10 mt-15 text-[#A79A86]">
      <h2 className="text-3xl">Certifications</h2>
      <div className="space-y-7 xl:flex xl:flex-col">
        {certificates.map((certificate) => (
          <div className="flex flex-col xl:flex-row" key={certificate.date}>
            <span className="opacity-70 xl:w-full">{certificate.date}</span>
            <div className="flex flex-col xl:w-7xl">
              <span className="text-lg">{certificate.title}</span>
              <span className="text-xs opacity-80">{certificate.author}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
