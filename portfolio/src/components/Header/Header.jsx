import styles from './Header.module.css';
import logo from '../../../img/MyLogo.png';

export function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="My Logo" />
            </div>
            <nav>
                <div className={styles.menu}>
                    <ul>
                        <li>Home</li>
                        <li>About me</li>
                        <li>Skills</li>
                        <li>Education</li>
                        <li>Work Experience</li>
                        <li>Projects</li>
                    </ul>
                </div>
            </nav>
            <div className={styles.button}>
                <button>Contact me</button>
            </div>
        </header>
    );
}