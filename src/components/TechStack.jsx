import { Icon } from "@iconify/react/dist/iconify.js";

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

export default function TechStack() {
  return (
    <section id="techStack" className="space-y-10 mt-15 text-[#A79A86]">
      <h2 className=" text-3xl">Tech Stack</h2>
      <div className="flex flex-col items-center justify-center gap-5 hover:bg-[#20332A] py-6 rounded-lg transition duration-500 ease-in-out">
        <h3 className="text-lg border-b border-gray-700 pb-2">
          Frontend Tools
        </h3>
        <div className="grid grid-cols-3 gap-10 md:grid-cols-4">
          {frontendStack.map((item) => (
            <span
              className="flex flex-col items-center justify-center gap-2 hover:-translate-y-2 transition duration-500 ease-in-out"
              key={item.title}
            >
              <Icon icon={item.icon} width="30" height="30" />
              <p className="text-xs text-center">{item.title}</p>
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10 md:flex-row md:justify-center md:gap-40 md:pt-10">
        <div className="flex flex-col items-center justify-center gap-5 hover:bg-[#20332A] py-6 rounded-lg transition duration-500 ease-in-out px-10">
          <h3 className="text-lg border-b border-gray-700 pb-2 text-center">
            Version Control
          </h3>
          <div className="grid grid-cols-1 gap-10">
            <span className="flex flex-col items-center justify-center gap-2 hover:-translate-y-2 transition duration-500 ease-in-out">
              <Icon icon="devicon:github" width="30" height="30" />
              <p className="text-xs text-center">Github</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 hover:bg-[#20332A] py-6 rounded-lg transition duration-500 ease-in-out px-10">
          <h3 className="text-lg border-b border-gray-700 pb-2">Dev Tools</h3>
          <div className="grid grid-cols-3 gap-10">
            {devTools.map((item) => (
              <span
                className="flex flex-col items-center justify-center gap-2 hover:-translate-y-2 transition duration-500 ease-in-out"
                key={item.title}
              >
                <Icon icon={item.icon} width="30" height="30" />
                <p className="text-xs text-center">{item.title}</p>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
