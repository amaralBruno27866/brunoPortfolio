import styles from './Header.module.css';
import logo from '../../../img/MyLogo.png';

export function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <a href="#">
                    <img src={logo} alt="My Logo" />
                </a>
            </div>
            <nav>
                <div className={styles.menu}>
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
                </div>
            </nav>
            <div className={styles.button}>
                <button>Contact me</button>
            </div>
        </header>
    );
}