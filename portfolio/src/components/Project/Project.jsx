import {Cards} from '../Cards/Cards';
import styles from './Project.module.css';

export function Project(){
    return(
        <div className={styles.project}>
            <h1>Projects</h1>
            <Cards/>
        </div>
    )
}
