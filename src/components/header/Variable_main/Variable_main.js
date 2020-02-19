import React from 'react';
import classes from './Variable_main.module.css';
import {NavLink} from "react-router-dom";
const Variable_main=(props)=>{
        let navigationElement = props.Express_main.map(nav => (
                <NavLink to={nav.id} activeClassName={classes.active}>{nav.title}</NavLink>));
        return <div className={classes.main_block}>
                    <div className={classes.list}>
                        <p>{navigationElement}</p>
                    </div>
                </div>
        };
export default Variable_main;