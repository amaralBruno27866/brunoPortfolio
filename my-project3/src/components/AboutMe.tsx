import styles from "../styles/AboutMe.module.css";
import { Card } from "./Card";

export function AboutMe() {
  return (
    <section id="About" className={styles.about_content}>
      <h1>About Me</h1>
      <div className={styles.about_container}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
