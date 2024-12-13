import projects from "../assets/projects/Projects";
import ProjectCard from "../components/ProjectCard";

function Project() {
  return (
    <section className="bg-background text-clr-primary" id="project">
      <div className="flex flex-col justify-center items-center h-fit space-y-20 max-w-[1280px] mx-auto">
        <h1 className="text-primary">Projects</h1>
        <div className="flex flex-wrap justify-center gap-6">
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
