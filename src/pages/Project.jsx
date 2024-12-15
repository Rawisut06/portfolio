import projects from "../assets/projects/Projects";
import ProjectCard from "../components/ProjectCard";
import Heading from "../components/Heading";

function Project() {
  return (
    <section className="p-4 bg-background text-clr-primary" id="project">
      <div className="flex flex-col items-center h-fit lg:h-screen pt-20 space-y-16 max-w-[1280px] mx-auto">
      <Heading name="Projects" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              image={project.image}
              link={project.link}
              github={project.github}
              skills={project.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
