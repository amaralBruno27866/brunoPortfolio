import styles from './Cards.module.css';

export function Cards(){
    return(
        <div className={styles.card}>
            <div className={styles.tech}>
                <p>
                    HTML CSS JavaScript React NodeJS MongoDB
                </p>
            </div>
            <div className={styles.img}>
                <img src="../../../img/oop.jpg" alt="Objetc Oriented Programming C++" />
            </div>
            <div className={styles.content}>
                <h4>subtitle</h4>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, adipisci tempore. Minus in neque illo itaque sint laudantium deleniti atque voluptates necessitatibus ratione, quaerat sapiente officiis dicta, id consequatur magni.</p>
            </div>
        </div>
    )
}