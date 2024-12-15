import { useContext, useState } from "react";
import { ThemeContext } from "../context/Theme"
import { CiLight, CiDark } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isToggle , setIsToggle ] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  }

  return (
    <div
      className="fixed top-0 left-0 z-50 w-full transition-transform duration-300">
      <nav
        className="bg-background text-clr-primary">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between p-4">
          <span className="text-xl font-bold uppercase">Rawisut</span>
          <RxHamburgerMenu size={40} onClick={handleToggle} className="md:hidden" />

          {/* Desktop navbar */}
          <ul className="flex space-x-8 text-ternary max-md:hidden">
            <li>
              <a className="relative group" href="/#home">
                Home
                <div className="absolute w-full h-1 scale-x-0 bg-clr-secondary group-hover:scale-x-100 group-hover:top-8 " />
              </a>
            </li>
            <li>
              <a className="relative group" href="/#about">About
                <div className="absolute w-full h-1 scale-x-0 bg-clr-secondary group-hover:scale-x-100 group-hover:top-8 " />
              </a>
            </li>
            <li>
              <a className="relative group" href="/#skills">Skills
                <div className="absolute w-full h-1 scale-x-0 bg-clr-secondary group-hover:scale-x-100 group-hover:top-8 " />
              </a>
            </li>
            <li>
              <a className="relative group" href="/#project">Project
                <div className="absolute w-full h-1 scale-x-0 bg-clr-secondary group-hover:scale-x-100 group-hover:top-8 " />
              </a>
            </li>
            <li>
              <a className="relative group" href="/#contact">Contact
                <div className="absolute w-full h-1 scale-x-0 bg-clr-secondary group-hover:scale-x-100 group-hover:top-8 " />
              </a>
            </li>
          </ul>
          <div>
            <button onClick={() => toggleTheme()}>
            {theme === "dark" ?
              <CiLight
                size={40}
              />
              :
              <CiDark
                size={40}
              />}
            </button>
          </div>
        </div>

        {/* Responsive navbar */}
        { isToggle &&
          <ul className="flex flex-col items-center w-full h-screen gap-16 pt-8 md:hidden text-ternary">
          <li onClick={handleToggle}>
            <a className="relative group" href="/#home">
              Home
              <div className="absolute w-full h-1 scale-x-0 bg-clr-secondary group-hover:scale-x-100 group-hover:top-8 " />
            </a>
          </li>
          <li onClick={handleToggle}>
            <a className="relative group" href="/#about">About
              <div className="absolute w-full h-1 scale-x-0 bg-clr-secondary group-hover:scale-x-100 group-hover:top-8 " />
            </a>
          </li>
          <li onClick={handleToggle}>
            <a className="relative group" href="/#skills">Skills
              <div className="absolute w-full h-1 scale-x-0 bg-clr-secondary group-hover:scale-x-100 group-hover:top-8 " />
            </a>
          </li>
          <li onClick={handleToggle}>
            <a className="relative group" href="/#project">Project
              <div className="absolute w-full h-1 scale-x-0 bg-clr-secondary group-hover:scale-x-100 group-hover:top-8 " />
            </a>
          </li>
          <li onClick={handleToggle}>
            <a className="relative group" href="/#contact">Contact
              <div className="absolute w-full h-1 scale-x-0 bg-clr-secondary group-hover:scale-x-100 group-hover:top-8 " />
            </a>
          </li>
        </ul>
        }

      </nav>
    </div>
  )
}

export default Navbar