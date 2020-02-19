import React from 'react';
import classes from './css/button_next.module.css';

const  Button_next=(props)=>{
    return <div>
        <button className={classes.button}>Отправить</button>
        {/*получаем данные через props*/}
    </div>
};
export default Button_next;