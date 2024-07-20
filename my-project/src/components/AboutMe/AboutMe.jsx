import styles from './AboutMe.module.css';
import {Banner} from './Banner/Banner';

export function AboutMe(){
    return(
        <section id="AbouteMe" className={styles.about}>
            <div>
                <h1>About me</h1>
            </div>
            <div className={styles.content}>
                <Banner/>
                <Banner/>
                <Banner/>
            </div>
        </section>
    )
}