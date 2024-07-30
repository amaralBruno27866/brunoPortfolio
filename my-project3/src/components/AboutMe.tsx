import { Card } from "./Card";
import styles from "../styles/AboutMe.module.css";
import image1 from "../assets/men_coding.svg";

export function AboutMe() {
  return (
    <section id="About" className={styles.about_content}>
      <h1>About Me</h1>
      <div className={styles.about_containerAll}>
        <div className={styles.about_containerOther}>
          <img src={image1} alt="" />
        </div>
        <div className={styles.about_containerCard}>
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
