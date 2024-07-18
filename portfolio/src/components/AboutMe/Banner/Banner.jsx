import styles from './Banner.module.css';

export function Banner(){
    return(
        <section>
            <div className={styles.banner}>
                <figure>
                    <img
                    src="../../../img/Me&Di.png"
                    alt="Album" />
                </figure>
                <div className={styles.card_body}>
                    <h2>New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className={styles.button}>
                        <button>Listen</button>
                    </div>
                </div>
            </div>
        </section>
    )
}