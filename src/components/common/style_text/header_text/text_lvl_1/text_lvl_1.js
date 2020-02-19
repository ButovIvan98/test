import React from 'react';
import classes from './css/text_lvl_1.module.css';

const TextLvl1 =(props)=>{
    return <div>
        <div>
            <h1 className={classes.style_text}>{props.text}</h1>
        </div>
    </div>
}
export default TextLvl1;