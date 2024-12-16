import Colmar from "../../images/projects/colmar.png";
import HandyHaven from "../../images/projects/handy-haven.png";
import Portfolio from "../../images/projects/portfolio.png";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio to showcase skills and projects.",
    image: Portfolio,
    link: "https://rawisut.vercel.app/",
    github: "https://github.com/Rawisut06/portfolio",
    skills: ["Tailwind CSS", "JavaScript", "React"],
  },
  {
    name: "Handy Heaven E-Commerce Website",
    description: "A responsive e-commerce platform for online shopping using MERN tech stack, final project in Generation Bootcamp",
    image: HandyHaven,
    link: "https://jsd-8-raptor-trooper-website.vercel.app/",
    github: "https://github.com/Raptor-trooper/JSD8_raptor_trooper_website",
    skills: ["React", "Tailwind CSS", "Express", "MongoDB"],
  },
  {
    name: "Colmar Academy",
    description: "A simple responsive static homepage website without Javascript in Generation bootcamp's assessment",
    image: Colmar,
    link: "https://28-rawisut-colmar.vercel.app/",
    github: "https://github.com/Rawisut06/28-rawisut-colmar",
    skills: ["HTML", "Tailwind CSS"],
  },
];

export default projects;
