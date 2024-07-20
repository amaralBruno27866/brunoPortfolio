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
                    <h2>New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className={styles.button}>
                        <button> Turn </button>
                    </div>
                </div>
            </div>
        </section>
    )
}