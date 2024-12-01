import { useContext } from "react"
import { ThemeContext } from "../context/Theme"

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex justify-between bg-background p-4 text-clr-primary">
      <span>Rawisut Wannasopha</span>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div>
        <button onClick={() => toggleTheme()}>{theme}Mode</button>
      </div>
    </div>
  )
}

export default Navbar