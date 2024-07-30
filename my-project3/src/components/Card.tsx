import styles from "../styles/Card.module.css";
import { ArrowUDownRight } from "phosphor-react";
import photo from "../assets/Pankeka.png";

export function Card(): JSX.Element {
  return (
    <section className={styles.card_content}>
      <img src={photo} alt="" />
      <div className={styles.container}>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odit
          corrupti praesentium. Fugit, repellat id? Praesentium, blanditiis
          soluta, dolore sapiente odio alias aliquam corrupti nemo aliquid nobis
          reiciendis ipsum repellendus.
        </p>
      </div>
      <div className={styles.footer}>
        <button id="turn">
          <ArrowUDownRight size={32} />
        </button>
      </div>
    </section>
  );
}
