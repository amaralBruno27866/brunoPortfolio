import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";

export function App() {
  return (
    <section>
      <Header />
      <body className={styles.wrapper}>
        <h1>Body</h1>
      </body>
    </section>
  );
}
