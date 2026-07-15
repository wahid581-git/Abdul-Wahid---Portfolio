import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Architecture from './components/Architecture'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import GithubStats from './components/GithubStats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Architecture />
        <Experience />
        <Certifications />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
