import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { About } from "./components/AboutMe/About"
import { Skills } from "./components/Skills/Skills"
import { Education } from "./components/Education/Education"
import { Work } from "./components/Work/Work"
import { Project } from "./components/Project/Project"
import { Contact } from "./components/Contact/Contact"
import { Footer } from "./components/Footer/Footer"

import './global.css'

export function App() {
  return (
    <section>
      <Header />
      <Main />
      <About />
      <Skills />
      <Education />
      <Work />
      <Project />
      <Contact />
      <Footer />
    </section>
    
  )
}