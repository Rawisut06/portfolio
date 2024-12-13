function Home() {
  return (
    <section className="bg-background text-clr-primary" id="home">
      <div className="max-w-[1280px] mx-auto flex items-center justify-center gap-8 h-screen">
        <div className="w-1/2 text-center">
          <h1 className="pb-2 text-primary">Hello, I&apos;m Rawisut</h1>
          <h1 className="pb-4 text-secondary">A passion fullstack developer</h1>
          <br />
          <p className="pb-6 text-ternary">Aspiring full-stack developer, eager to learn and build impactful web applications</p>
          <br />
          <div className="flex justify-center gap-6">
            <a
              href="src/assets/cv-resume/cv-resume_draft2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 border-2 size-fit border-clr-primary hover:border-background hover:bg-clr-primary hover:text-background"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="block p-2 border-2 size-fit border-clr-primary hover:border-background hover:bg-clr-primary hover:text-background"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* <div className="flex justify-center w-1/2">
          <img className="w-3/4" src="/src/assets/react.svg"/>
        </div> */}
      </div>
    </section>
  )
}

export default Home