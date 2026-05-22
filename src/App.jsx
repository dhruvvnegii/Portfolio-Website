
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  // Activate scroll entrance animations
  useScrollReveal();

  return (
    <div className="bg-[#030712] min-h-screen text-gray-100 selection:bg-indigo-500/30 selection:text-white">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
