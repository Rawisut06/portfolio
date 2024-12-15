function Button({ name, link, icon: Icon, className }) {
  return (
    <a
      href={link}
      className={`${className} flex items-center gap-2 hover-btn-shadow hover-btn-bg`}
    >
      {Icon && <span><Icon className="w-5 h-5 text-current" /></span>}<span className="text-current">{name}</span>
    </a>
  )
}

export default Button
