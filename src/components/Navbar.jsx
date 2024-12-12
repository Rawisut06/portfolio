import { useContext } from "react"
import { ThemeContext } from "../context/Theme"
import { CiLight, CiDark } from "react-icons/ci";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    <nav
      className="fixed w-full transition-all duration-75 ease-in-out bg-background text-clr-primary">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between p-4">
        <span>Rawisut Wannasopha</span>
        <ul className="flex space-x-4">
          <li><a href="/#home">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#skills">Skills</a></li>
          <li><a href="/#project">Project</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        <div>
          <button onClick={() => toggleTheme()}>
          {theme === "dark" ?
            <CiLight
              size={50}
            />
            :
            <CiDark
              size={50}
            />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar