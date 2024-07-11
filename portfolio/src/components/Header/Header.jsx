import styles from './Header.module.css';
import logo from '../../../img/pets.png';

export function Header(){
    return(
        <div className={styles.header}>
            <nav>
                <div>
                    <img src={logo} alt="pets logo" />
                </div>
                <div>
                    <p>Bruno&apos;s Portfolio</p>
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Products</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <button>Contract Me</button>
                </div>
            </nav>
        </div>
    );
}