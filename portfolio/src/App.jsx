import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { About } from "./components/AboutMe/About"
import { Project } from "./components/Project/Project"
import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <About/>
      <Project/>
    </div>
  )
}
