import projects from "../assets/projects/Projects";
import ProjectCard from "../components/ProjectCard";

function Project() {
  return (
    <section className="bg-background text-clr-primary" id="project">
      <div className="flex flex-col items-center h-screen space-y-20 max-w-[1280px] mx-auto">
      <h1 className="relative text-primary w-fit">Projects <div className="absolute w-[40%] h-2 top-14 bg-clr-secondary" /> </h1>
        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              image={project.image}
              link={project.link}
              skills={project.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
