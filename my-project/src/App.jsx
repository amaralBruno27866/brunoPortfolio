import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { AboutMe } from './components/AboutMe/AboutMe';

import './global.css';

import styles from './App.module.css';

export function App() {

  return (
    <div className={styles.main}>
      <Header/>
      <Home/>
      <AboutMe/>
    </div>
  )
}
