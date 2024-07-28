import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

export function App() {
  return (
    <section>
      <Header />
      <Home />
      <body className={styles.wrapper}>
        <h1>Body</h1>
      </body>
    </section>
  );
}
