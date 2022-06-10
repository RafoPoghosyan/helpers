import React from "react";
import styles from './stars.module.css';

export default (props) => {
    return(
        <div className={styles['stars-container']}>
            {props.data.map((elem, i) => {
                let starStyle = '';
                i < props.item.stars && (starStyle = styles['star-style'])
                return <img src={elem.img} alt={elem.alt}
                            className={`${styles['star-img']} ${starStyle}`} key={i}/>
            })}
        </div>
    )
}