import styles from './AboutMe.module.css';
import {Banner} from './Banner/Banner';
import beagle from '../img/BellBell.png'
import programmer from '../img/programer.png'

export function AboutMe(){
    return(
        <section id="AboutMe" className={styles.about}>
            <div>
                <h1>About me</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.developer}>
                    <img src={programmer} alt="A man coding" />
                </div>
                <div className={styles.content}>
                    <Banner
                        picture={<img src={beagle} alt="A small dog" />}
                        title="Bella, the Beagle"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Possimus odit repellendus quisquam sequi expedita doloremque aperiam 
                        labore nulla quo ratione eos quia, illo voluptates. Hic possimus 
                        suscipit libero ducimus natus?"
                    />
                </div>
            </div>
        </section>
    )
}