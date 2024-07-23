import PropTypes from 'prop-types';
import styles from './Banner.module.css';

export function Banner(props){
    return(
        <div className={styles.banner}>
            <div className={styles.picture}>
                {props.picture}
            </div>
            <div className={styles.card_body}>
                <h2>{props.title}</h2>
                <p>
                    {props.content}
                </p>
            </div>
            <div className={styles.footer}>
                <button> 
                    Turn
                </button>
            </div>
        </div>
    )
}

Banner.propTypes = {
    picture: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};