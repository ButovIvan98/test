import React from 'react';
import classes from './css/input_select.module.css';
import standartClasses from './css/input_text.css';

const InputSelect=(props)=>{
    return <div className={classes.block}>
        {/*<input name={props.name} type='text' value={props.addressPage.country} className={classes.input}/>*/}
        {/*<label className={props.addressPage.classLabel}>{props.label_text}</label>*/}
    </div>
};
export default InputSelect;