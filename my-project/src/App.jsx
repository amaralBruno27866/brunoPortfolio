import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { AboutMe } from './components/AboutMe/AboutMe';

import './global.css';

export function App() {

  return (
    <div>
      <Header/>
      <Home/>
      <AboutMe/>
    </div>
  )
}
