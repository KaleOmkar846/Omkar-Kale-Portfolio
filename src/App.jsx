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
