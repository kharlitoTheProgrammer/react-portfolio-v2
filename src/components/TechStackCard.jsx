import { Icon } from "@iconify/react/dist/iconify.js";

export default function TechStackCard({ title, stack, gridCols, gridColsMd }) {
  const gridClass = gridCols || "grid-cols-3";
  const gridClassMd = gridColsMd || "md:grid-cols-4";

  return (
    <>
      <h3 className="text-lg border-b w-full text-center border-gray-700 pb-2">
        {title}
      </h3>
      <div className={`grid ${gridClass} gap-10 ${gridClassMd}`}>
        {stack.map((item) => (
          <span
            className="flex flex-col items-center justify-center gap-2 hover:-translate-y-2 transition duration-500 ease-in-out"
            key={item.title}
          >
            <Icon icon={item.icon} width="30" height="30" />
            <p className="text-xs text-center">{item.title}</p>
          </span>
        ))}
      </div>
    </>
  );
}
