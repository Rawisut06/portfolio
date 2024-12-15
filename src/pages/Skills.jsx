import SkillCard from '../components/SkillCard'

function Skills() {
  return (
    <section className="bg-background text-clr-primary" id="skills">
      <div className="flex flex-col justify-center items-center space-y-20 max-w-[1280px] mx-auto h-screen">
      <h1 className="relative text-primary w-fit">My Skill <div className="absolute w-[40%] h-2 top-14 bg-clr-secondary" /> </h1>
        <SkillCard className="py-8" />
      </div>
    </section>
  )
}

export default Skills