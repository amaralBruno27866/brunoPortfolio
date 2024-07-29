import styles from "../styles/Card.module.css";
import pankeka from "../assets/Pankeka.png";
import { ArrowUDownRight } from "phosphor-react";

export function Card() {
  return (
    <section className={styles.card_content}>
      <img src={pankeka} alt="Pankeka beagle" />
      <div className={styles.container}>
        <h2>Pankeka, the lemon beagle</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eius
          perspiciatis voluptates, aspernatur id cumque nemo minima accusantium
          aut, molestiae dolorum impedit atque? Delectus eveniet officiis
          voluptates ducimus deserunt ab!
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
