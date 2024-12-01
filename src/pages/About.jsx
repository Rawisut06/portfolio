import React from 'react'

function About() {
  return (
    <section className="text-center bg-background text-clr-primary" id="about">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-8 h-screen">
        <h1 className="text-primary">About Me</h1>
        <div className="flex justify-stretch gap-4">
          <div className="w-1/2">
            <img className="w-3/4" src="/src/assets/react.svg" alt="" />
          </div>
          <div className="w-1/2 text-left">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam reiciendis inventore nostrum blanditiis dolorum rem veniam totam iusto, excepturi et repudiandae quasi voluptates molestiae dolores accusamus. Facilis quidem nam nostrum.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About