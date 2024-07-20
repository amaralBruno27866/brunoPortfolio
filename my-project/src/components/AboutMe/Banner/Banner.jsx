import styles from './Banner.module.css';
import photo from './photos/BellBell.png';

export function Banner(){
    return(
        <section>
            <div className={styles.banner}>
                <figure>
                    <img src={photo} alt="" />
                </figure>
                <div className={styles.card_body}>
                    <h2>Bella the Beagle</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Nulla recusandae reprehenderit voluptas esse, sequi eaque 
                        voluptates reiciendis odit ratione rem, in, cupiditate non 
                        eveniet temporibus cum optio quaerat vero eius.
                    </p>
                    <div className={styles.button}>
                        <button> Turn </button>
                    </div>
                </div>
            </div>
        </section>
    )
}