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
                        <li>Projects</li>
                        <li>About me</li>
                        <li>Certificates</li>
                    </ul>
                </div>
            </nav>
            <div className={styles.button}>
                <button>Contract Me</button>
            </div>
        </header>
    );
}