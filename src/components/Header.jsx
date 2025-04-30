import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { Github, GithubIcon, LinkedinIcon, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Tech Stack", id: "techStack" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
];

export default function Header() {
  const [selected, setSelected] = useState("About");

  const handleClick = (id) => {
    setSelected(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setSelected(id);
          }
        });
      },
      { threshold: 1 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="max-w-2xs mx-auto container space-y-15 md:max-w-xl lg:w-[48%] lg:sticky lg:top-0 lg:py-24 lg:h-full lg:flex lg:flex-col lg:items-start lg:justify-between gap-11">
      <div>
        <h1 className="special-gothic-expanded-one-regular text-3xl text-[#D6CAB5] font-bold lg:text-6xl">
          Kharl Aquino
        </h1>
        <p className="text-xl special-gothic-expanded-one-regular text-[#A79A86] lg:text-3xl">
          Frontend Developer
        </p>
      </div>
      <button className="animate-pulse text-[#A79A86] lg:text-xl cursor-pointer flex  hover:-translate-y-2 transition duration-500 ease-in-out group">
        <a href="/Resume_Kharl_Aquino.pdf">View Resume</a>
        <span>
          <ArrowUpRight
            size={20}
            className="group-hover:translate-x-1 transition duration-500 ease-in-out group-hover:text-white"
          />
        </span>
      </button>

      <nav className="hidden lg:block text-[#A79A86]">
        <ul>
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`text-4xl cursor-pointer transition-all duration-500 ease-in-out text-[#A79A86] ${
                selected === item.id ? "font-bold" : "opacity-70"
              }`}
            >
              <span
                className={`transition-all duration-500 ease-in-out overflow-hidden w-35 ${
                  selected === item.id
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-5"
                }`}
              >
                {selected === item.id ? "━━━" : ""}
              </span>
              <span className="ml-2 transition-all duration-300 ease-in-out">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      <section className="flex gap-2">
        <LinkedinIcon
          size={32}
          color="#A49581"
          className="hover:-translate-y-2 duration-500 ease-in-out transition hover:scale-110"
        />
        <GithubIcon
          size={32}
          color="#A49581"
          className="hover:-translate-y-2 duration-500 ease-in-out transition hover:scale-110"
        />
      </section>
    </header>
  );
}
