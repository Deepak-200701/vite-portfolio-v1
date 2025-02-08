// import './App.css'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <main className="main-page-wrapper">
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        {/* <div className="backto-top">
          <div>
            <i data-feather="arrow-up"></i>
          </div>
        </div> */}
      </main>
      <Footer />
    </>
  )
}

export default App
