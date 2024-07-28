import styles from "../styles/Header.module.css";
import logo from "../assets/MyLogo.svg";

export function Header() {
  return (
    <section className={styles.main_container}>
      <div>
        <a href="#Home">
          <img src={logo} alt="Personal logo" />
        </a>
      </div>

      <div>
        <nav>
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Aboute">About me</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Education">Education</a>
            </li>
            <li>
              <a href="#Work">Work Experience</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <button>Contact</button>
      </div>
    </section>
  );
}
