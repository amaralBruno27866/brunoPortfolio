import {Navbar} from './components/NavBar/Navbar';
import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.main}>
      <Navbar/>
    </div>
  )
}
