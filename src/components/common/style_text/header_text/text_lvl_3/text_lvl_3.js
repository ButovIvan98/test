import React from 'react';
import classes from './css/text_lvl_3.module.css';

const TextLvl3 =(props)=>{
    return <div className={classes.block}>
        <h3 className={classes.text}>
            {
                props.text
            }
        </h3>
    </div>
}
export default TextLvl3;