import styles from './Navbar.module.css'
import logo from '../../assets/Navbar/MyLogo.png';

export function Navbar() {
    return(
        <section className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="My personal logo" />
            </div>

            <div className={styles.menu}>
                <nav>
                    <ul>
                        <li>
                            <a href="#Home">Home</a>
                        </li>
                        <li>
                            <a href="#AboutMe">About me</a>
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

            <div className={styles.contact}>
                <button>Contact</button>
            </div>
        </section>
    )
}