function Button({ name, link, icon: Icon, className }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} flex items-center space-x-2`}
    >
      {Icon && <span><Icon className="w-5 h-5 text-current" /></span>}<span className="text-current">{name}</span>
    </a>
  )
}

export default Button
