import styles from "../styles/Card.module.css";
import { ArrowUDownRight } from "phosphor-react";

interface CardProps {
  picture: JSX.Element;
  title: string;
  content: string;
}

export function Card(props: CardProps): JSX.Element {
  return (
    <section className={styles.card_content}>
      {props.picture}
      <div className={styles.container}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
      <div className={styles.footer}>
        <button id="turn">
          <ArrowUDownRight size={32} />
        </button>
      </div>
    </section>
  );
}
