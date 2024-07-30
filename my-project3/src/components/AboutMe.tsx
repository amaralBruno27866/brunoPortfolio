import { Card } from "./Card";
import styles from "../styles/AboutMe.module.css";
import pankeka from "../assets/Pankeka.png";
import "swiper/css";

export function AboutMe() {
  return (
    <section id="About" className={styles.about_content}>
      <h1>About Me</h1>
      <div className={styles.about_containerAll}>
        <div className={styles.about_containerOther}>
          <h2>test</h2>
        </div>
        <div className={styles.about_containerCard}>
          <Card
            picture={<img src={pankeka} alt="Pankeka the beagle" />}
            title="Pankeka, the Beagle"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Totam, quisquam. Illo mollitia laudantium eum ducimus alias corporis 
          quas velit. Vel ut eveniet quaerat, vitae nulla iste dolorem nobis 
          molestias quos?"
          />

          <Card
            picture={<img src={pankeka} alt="Pankeka the beagle" />}
            title="Pankeka, the Beagle"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Totam, quisquam. Illo mollitia laudantium eum ducimus alias corporis 
          quas velit. Vel ut eveniet quaerat, vitae nulla iste dolorem nobis 
          molestias quos?"
          />
        </div>
      </div>
    </section>
  );
}
