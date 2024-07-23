/* eslint-disable react/prop-types */
import styles from './Banner.module.css';

export function Banner(props){
    return(
        <section>
            <div className={styles.banner}>
                <figure>
                    {props.picture}
                </figure>
                <div className={styles.card_body}>
                    <h2>{props.title}</h2>
                    <p>
                       {props.content}
                    </p>
                </div>
                <div className={styles.button}>
                    <button> 
                        Turn
                    </button>
                </div>
            </div>
        </section>
    )
}