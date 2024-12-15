function Heading({ name }) {
  return (
    <h1 className="relative duration-300 ease-in-out text-primary w-fit group hover:text-clr-secondary">
      {name}
      <div className="absolute w-[40%] h-2 top-14 group-hover:right-0 group-hover:bg-clr-primary bg-clr-secondary " />
    </h1>
  )
}

export default Heading