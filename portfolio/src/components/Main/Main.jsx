import styles from './Main.module.css'

export function Main(){
    return(
        <div className={styles.Main}>
            <video className={styles.video} autoPlay loop muted>
                <source src='../../../video/bk_1.mp4'/>
            </video>
            <div className={styles.content}>
                <h4>test1</h4>
                <h1>test2</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, modi! Tempora quasi eaque quae eius, omnis assumenda laborum odit reiciendis ab deserunt quia voluptatem nobis neque magnam doloremque ipsam cum!</p>
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    )
}