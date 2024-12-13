import SkillCard from '../components/SkillCard'

function Skills() {
  return (
    <section className="bg-background text-clr-primary" id="skills">
      <div className="flex flex-col justify-center items-center space-y-20 max-w-[1280px] mx-auto h-screen">
        <h1 className="text-primary">My Skills</h1>
        <SkillCard className="py-8" />
      </div>
    </section>
  )
}

export default Skills