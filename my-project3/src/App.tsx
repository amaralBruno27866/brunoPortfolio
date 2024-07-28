import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";

export function App() {
  return (
    <section>
      <Header />
      <Home />
      <body className={styles.wrapper}>
        <AboutMe />
      </body>
    </section>
  );
}
