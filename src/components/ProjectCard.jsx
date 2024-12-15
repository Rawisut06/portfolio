import Button from "./Button";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ name, description, image, link, skills }) {
  return (
    <div className="max-w-xs p-2 border-2 hover-shadow border-clr-primary hover:border-clr-secondary hover-btn-bg bg-background">
      <div className="w-full h-48 overflow-hidden">
        <img src={image} alt={`${name}-image`} className="object-cover w-full h-full duration-200 ease-in hover:scale-110" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-clr-primary">{name}</h3>
        <p className="mt-2 text-sm text-clr-primary/70">{description}</p>
        <div className="flex flex-wrap h-full gap-2 mt-3">
          {skills.map((skill, index) => {
            const skillColors = {
              HTML: "bg-orange-100 text-orange-600",
              CSS: "bg-blue-100 text-blue-600",
              JavaScript: "bg-yellow-100 text-yellow-600",
              React: "bg-blue-100 text-blue-600",
              "Tailwind CSS": "bg-teal-100 text-teal-600",
              Express: "bg-green-100 text-green-600",
              MongoDB: "bg-green-100 text-green-600",
            };
            return (
            <span
              key={index}
              className={`text-xs font-medium px-2 py-1 rounded-sm ${skillColors[skill] || "bg-gray-100 text-gray-600"}`}
            >
              {skill}
            </span>
            )})}
        </div>
        <div className="flex justify-end gap-6">
          <button
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 space-x-2 hover:text-clr-primary"
          ><FaExternalLinkAlt /><span>Live demo</span></button>
          <button
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 space-x-2 hover:text-clr-primary"
          ><FaGithub /><span>Github</span></button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
