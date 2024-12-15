import Heading from "../components/Heading"

function About() {
  return (
    <section className="py-20 text-center bg-background text-clr-primary" id="about">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center space-y-20 h-screen">
        <Heading name="About Me" />
        <div className="flex flex-col items-center gap-4 justify-stretch md:flex-row">
          <div className="flex justify-center w-1/2">
            <img className="object-contain w-1/2 rounded-lg" src="/src/assets/about-img.jpg" alt="about-img" />
          </div>
          <div className="w-1/2 text-left text-ternary">
            <p>Hi, I&apos;m Rawisut! I&apos;m a recent graduate from the Generation Bootcamp in Junior Software Development and hold a Bachelor&apos;s degree in Earth Sciences (Geology).</p>
            <br />
            <p>Over the past year, I&apos;ve developed strong problem-solving, adaptability, and time management skills while caring for a bedridden patient.</p>
            <br />
            <p>I&apos;m passionate about technology and have built skills in HTML, CSS, Tailwind, JavaScript, React, Node.js, Express, and MongoDB. I&apos;m now ready to start my journey as a Software Developer, contributing to meaningful projects while growing professionally.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About