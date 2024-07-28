import styles from "../styles/Home.module.css";
import programmer from "../assets/coding.png";
import video from "../assets/bk_1.mp4";

export function Home() {
  return (
    <section id="Home" className={styles.home_content}>
      <video className={styles.home_video} autoPlay loop muted>
        <source src={video} />
      </video>

      <div className={styles.home_container}>
        <div className={styles.home_texts}>
          <span className={styles.blur}></span>
          <span className={styles.blur}></span>
          <h4>BUILD A NEW WORLD</h4>
          <h1>
            Hi, I&apos;m <span>Bruno</span>, a Developer
          </h1>
          <h1>
            Technology is <span>my LIFE</span>
          </h1>
          <p>
            Technology always fascinated me and its potencial to transform our
            lives. This curiosity lead me to pursue a tech career, where I have
            been able to develop my skills in programming an solutions. I am a
            committed professional, who enjoys challenges and appreciate each
            new experience.
          </p>
        </div>
        <div className={styles.home_image}>
          <img src={programmer} alt="A man codings" />
        </div>
      </div>
    </section>
  );
}
