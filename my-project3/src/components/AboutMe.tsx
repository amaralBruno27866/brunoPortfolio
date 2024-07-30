import styles from "../styles/AboutMe.module.css";
import { Card } from "./Card";
import pankeka from "../assets/Pankeka.png";

export function AboutMe() {
  return (
    <section id="About" className={styles.about_content}>
      <h1>About Me</h1>
      <div className={styles.about_container}>
        <Card
          picture={<img src={pankeka} alt="Card Image" />}
          title="Pankeka, the beagle"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsam mollitia ducimus non pariatur in aliquid saepe culpa recusandae quidem repellat officiis. Quos suscipit nam ullam iusto vero molestiae nobis."
        />
        <Card
          picture={<img src={pankeka} alt="Card Image" />}
          title="Pankeka, the beagle"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsam mollitia ducimus non pariatur in aliquid saepe culpa recusandae quidem repellat officiis. Quos suscipit nam ullam iusto vero molestiae nobis."
        />
        <Card
          picture={<img src={pankeka} alt="Card Image" />}
          title="Pankeka, the beagle"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsam mollitia ducimus non pariatur in aliquid saepe culpa recusandae quidem repellat officiis. Quos suscipit nam ullam iusto vero molestiae nobis."
        />
        <Card
          picture={<img src={pankeka} alt="Card Image" />}
          title="Pankeka, the beagle"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsam mollitia ducimus non pariatur in aliquid saepe culpa recusandae quidem repellat officiis. Quos suscipit nam ullam iusto vero molestiae nobis."
        />
      </div>
    </section>
  );
}
