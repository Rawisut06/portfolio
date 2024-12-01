function Home() {
  return (
    <section className="bg-background text-clr-primary" id="home">
      <div className="max-w-[1280px] mx-auto flex items-center gap-4 h-screen">
        <div className="w-1/2 space-y-4">
          <h1 className="text-primary">Hello, I&apos;m Rawisut Wannasopha</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, provident?</p>
        </div>
        <div className="w-1/2 flex justify-center">
          <img className="w-3/4" src="/src/assets/react.svg"/>
        </div>
      </div>
    </section>
  )
}

export default Home