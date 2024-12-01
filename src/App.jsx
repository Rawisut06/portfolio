import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Project from './pages/Project'
import Footer from './components/Footer'
import { useContext } from 'react'
import { ThemeContext } from './context/Theme'

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
