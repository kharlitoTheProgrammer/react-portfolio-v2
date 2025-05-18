import { ArrowUpRight } from "lucide-react";

const projectsItems = [
  {
    title: "Special Order Application",
    description:
      "Contributed to the development of a web app for generating Special Order documents for graduating students. Utilized Vue.js for dynamic rendering and API integration. Helped design a responsive UI using Tailwind CSS. Assisted in backend API management with Laravel",
    techStack: [
      { label: "JavaScript" },
      { label: "TypeScript" },
      { label: "Vue JS" },
      { label: "Tailwind CSS" },
      { label: "Shad-cn Vue" },
      { label: "TanStack" },
    ],
    image: "/so-application.png",
  },
  {
    title:
      "Mobile-Based Virtual Eyeglass Frame Fitting Using Augmented Reality with Integrated Online Appointment Management System for R. Sarabia Optical",
    description:
      "Developed a mobile AR app for virtual eyeglass fitting, serving 150+ users, with Firebase integration for authentication and data storage. Led UI and functionality improvements.",
    techStack: [
      { label: "Kotlin" },
      { label: "Android Studio" },
      { label: "DeepAR API" },
    ],
    image: "/caps-photo.jpg",
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "Built a dynamic Tic-Tac-Toe game using React, featuring a responsive UI and state management with React hooks. Implemented a user-friendly interface with real-time game updates and game reset functionality. The app showcases efficient state handling and conditional rendering for both single-player and two-player modes.",
    techStack: [{ label: "React" }, { label: "HTML" }, { label: "CSS" }],
    image: "/tic-tac-toe.png",
    link: "https://tic-tac-toe-rust-mu.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-10 mt-15 text-[#A79A86]">
      <h2 className="text-3xl">Projects</h2>
      {projectsItems.map((project, index) => (
        <div
          className="md:flex md:gap-5 md:justify-center xl:hover:bg-[#20332A] py-6 rounded-lg transition duration-500 ease-in-out px-4"
          key={index}
        >
          <div className="border border-gray-700 h-50 w-72 rounded-md md:w-1/2 md:mt-5 hover:-translate-y-2 transition duration-500 ease-in-out hover:scale-105">
            <img
              src={project.image}
              className="w-full h-50 object-cover rounded-md hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
          <div className="md:w-full">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="text-left mt-4 text-xl flex hover:-translate-y-1 trasition duration-500 ease-in-out group cursor-pointer">
                  {project.title}
                  <ArrowUpRight className="group-hover:translate-x-1 transition duration-500 ease-in-out group-hover:-translate-y-1" />
                </div>
              </a>
            ) : (
              <div className="text-left mt-4 text-xl">{project.title}</div>
            )}
            {/* <h3 className="text-left mt-4 text-xl">{project.title}</h3> */}
            <p className="text-sm opacity-70 mt-2">{project.description}</p>
            <div className="mt-3 mx-auto container max-w-2xl flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  className="border border-gray-500 rounded-full px-5 py-1 text-xs hover:-translate-y-1 transition duration-500 ease-in-out"
                  key={tech.label}
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
