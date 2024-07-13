import styles from './Header.module.css';
import logo from '../../../img/MyLogo.png';

export function Header(){
    return (
        <header className={styles.header}>
            <nav>
                <div className={styles.logo}>
                    <img src={logo} alt="My Logo" />
                </div>
                <div className={styles.menu}>
                    <ul>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>About me</li>
                        <li>Extra</li>
                    </ul>
                    <button>Contract Me</button>
                </div>
            </nav>
        </header>
    );
}