import styles from './AboutMe.module.css';
import {Banner} from './Banner/Banner';

export function AboutMe(){
    return(
        <section id="AbouteMe" className={styles.about}>
            <div>
                <h1>About me</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Banner/>
                </div>
            </div>
        </section>
    )
}