// import skills from "../assets/skills/Skills";
import HTML5 from "../assets/skills/html5";
import CSS from "../assets/skills/CSS3";
import TailwindCSS from "../assets/skills/Tailwind CSS";
import JavaScript from "../assets/skills/JavaScript";
import React from "../assets/skills/React";
import Expressjs from "../assets/skills/Express";
import MongoDB from "../assets/skills/MongoDB";

function SkillCard() {
  const skills = [
    { name: "html", icon: HTML5, url: "https://es.wikipedia.org/wiki/HTML5" },
    { name: "css", icon: CSS, url: "https://es.wikipedia.org/wiki/HTML5" },
    { name: "js", icon: JavaScript, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "tailwind", icon: TailwindCSS,url: "https://tailwindcss.com/"},
    { name: "react", icon: React, url: "https://react.dev/" },
    { name: "express", icon: Expressjs, url: "https://expressjs.com/" },
    { name: "mongoDb", icon: MongoDB, url: "https://www.mongodb.com/" },
  ];
  return (
    <div className="flex flex-wrap gap-8">
      {skills.map((skill, index) => (
        <a
          key={index}
          href={skill.url}
          className="flex flex-col items-center w-24 h-24 gap-2 p-2 transition-shadow bg-gray-200 shadow-lg rounded-xl hover:shadow-xl"
        >
          <skill.icon
            className="text-6xl"
          />
          <span className="text-sm font-medium text-gray-700">{skill.name.toUpperCase()}</span>
        </a>
      ))}
    </div>
  );
}

export default SkillCard;
