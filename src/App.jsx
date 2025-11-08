import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import HackathonGallery from './components/HackathonGallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className="bg-animation">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <HackathonGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
