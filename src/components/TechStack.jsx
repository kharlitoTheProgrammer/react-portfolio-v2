import { Icon } from "@iconify/react/dist/iconify.js";
import TechStackCard from "./TechStackCard";

const frontendStack = [
  { title: "HTML", icon: "devicon:html5" },
  { title: "CSS", icon: "devicon:css3" },
  { title: "JavaScript", icon: "devicon:javascript" },
  { title: "TypeScript", icon: "devicon:typescript" },
  { title: "Tailwind CSS", icon: "devicon:tailwindcss" },
  { title: "Vue", icon: "devicon:vuejs" },
  { title: "React", icon: "devicon:react" },
  { title: "Angular", icon: "devicon:angular" },
];

const devTools = [
  { title: "Vite", icon: "devicon:vitejs" },
  { title: "VS Code", icon: "devicon:vscode" },
  { title: "Figma", icon: "devicon:figma" },
];

const versionControl = [{ title: "Github", icon: "devicon:github" }];

export default function TechStack() {
  return (
    <section id="techStack" className="space-y-10 mt-15 text-[#A79A86]">
      <h2 className=" text-3xl">Tech Stack</h2>
      <div className="flex flex-col items-center justify-center gap-5 hover:bg-[#20332A] py-6 rounded-lg transition duration-500 ease-in-out px-10">
        <TechStackCard title="Frontend Tools" stack={frontendStack} />
      </div>
      <div className="flex flex-col gap-10 md:flex-row md:justify-center md:gap-40 md:pt-10">
        <div className="flex flex-col items-center justify-center gap-5 hover:bg-[#20332A] py-6 rounded-lg transition duration-500 ease-in-out px-10">
          <TechStackCard
            title="Version Control"
            stack={versionControl}
            gridCols={"grid-cols-1"}
            gridColsMd={"grid-cols-1"}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 hover:bg-[#20332A] py-6 rounded-lg transition duration-500 ease-in-out px-10">
          <TechStackCard
            title="Dev Tools"
            stack={devTools}
            gridCols={"grid-cols-3"}
            gridColsMd={"grid-cols-3"}
          />
        </div>
      </div>
    </section>
  );
}
