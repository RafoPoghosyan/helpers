import React from "react";
import styles from './moreLess.module.css';
import showMoreIcon from "../../../assets/Images/AllInfo/showMore.png";
import showLessIcon from "../../../assets/Images/AllInfo/showLess.png";

export default (props) => {


    return (
        <div className={styles['show-box']}>
            {!props.elem && <div onClick={() => props.onMoreChange(props.index)}>
                <span>Read More</span>
                <img src={showMoreIcon} alt='show more'/>
            </div>}
            {props.elem &&
            <img src={showLessIcon} alt='show less' onClick={() => props.onLessChange(props.index)}/>}
        </div>
    )
}