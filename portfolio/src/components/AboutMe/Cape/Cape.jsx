import styles from './Cape.module.css';

export function Cape(){
    return(
        <div className={styles.cape}>
            <div className={styles.img}>
                <img src="../../../img/IMG_0168.JPEG" alt="" />
                <img src="../../../img/IMG_0380.JPEG" alt="" />
            </div>
            <div className={styles.content}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aspernatur 
                    ex minima autem minus nobis modi amet obcaecati delectus illum libero 
                    explicabo natus optio reiciendis? Illum laboriosam voluptatem in ex!
                </p>
            </div>
        </div>
    )
}