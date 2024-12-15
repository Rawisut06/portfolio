import Button from "../components/Button"

function Home() {
  return (
    <section className="bg-background text-clr-primary" id="home">
      <div className="max-w-[1280px] mx-auto flex items-center justify-center gap-8 h-screen">
        <div className="w-1/2 text-center">
          <h1 className="pb-2 text-primary">Hello, I&apos;m <span className="font-bold text-clr-secondary">Rawisut</span></h1>
          {/* <h1 className="pb-4 text-secondary">A passion fullstack developer</h1> */}
          <br />
          <p className="pb-6 text-ternary"><span className="font-bold text-clr-secondary">Aspiring full-stack developer</span>, eager to learn and build impactful web applications</p>
          <br />
          <div className="flex justify-center gap-6">
            <Button
              link="my-cv/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              name="Download CV"
              className="block p-2 border-2 size-fit"
            />
            <Button
              link="#contact"
              name="Contact Me"
              className="block p-2 border-2 size-fit"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home