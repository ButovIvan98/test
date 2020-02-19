import React from 'react';
import classes from './css/add_address.module.css';
import TextLvl1 from "../../../common/style_text/header_text/text_lvl_1/text_lvl_1";
import Button_return from "../../../common/standarts_elements/button/button_return/button_return";
import TextLvl3 from "../../../common/style_text/header_text/text_lvl_3/text_lvl_3";

const AddAddress = (props) => {
    let updateCountry=()=>{
        props.updateTextCountry();
    }
    debugger
    let updateCite=()=>{
        props.updateTextCity();
    }
    let updateStreet=()=>{
        props.updateTextStreet();
    }
    let updateHouse=()=>{
        props.updateTextHouse();
    }
    let updateFlat=()=>{
        props.updateTextFlat();
    }
    let updateIndex=()=>{
        props.updateTextIndex();
    }


    return <div className={classes.main_block}>
        <div>
            <Button_return/>
            <TextLvl1 text={'Добавить адрес'}/>
        </div>
        <div className={classes.block}>
                <TextLvl3 text={'Заполните адрес'}/>
        <div className={classes.all_wrapper}>
            <div className={classes.wrapper}>
                <div className={classes.nesting}>
                    <div className={classes.nesting_left}>
                        <div className={classes.block_input}>
                            <input placeholder={'Россия'}  onChange={updateCountry} value={props.addressPage.country} type='text'  className={classes.input}/>
                            <label className={classes.label_text}>Страна</label>
                        </div>
                    </div>
                </div>
                <div className={classes.nesting}>
                    <div className={classes.nesting_right}>
                        <div className={classes.block_input}>
                            <input onChange={updateCite} value={props.addressPage.city} type='text'  className={classes.input}/>
                            <label className={classes.label_text}>Город</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.wrapper}>
                <div className={classes.nesting}>
                    <div className={classes.nesting_left}>
                        <div className={classes.block_input}>
                            <input onChange={updateStreet}  value={props.addressPage.street} type='text'  className={classes.input}/>
                            <label className={classes.label_text}>Улица</label>
                        </div>
                    </div>
                </div>
                <div className={classes.nesting}>
                    <div className={classes.nesting_right}>
                        <div className={classes.block_input}>
                            <input onChange={updateHouse} value={props.addressPage.house} type='text'  className={classes.input}/>
                            <label className={classes.label_text}>Дом/Корпус</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.wrapper}>
                <div className={classes.nesting}>
                    <div className={classes.nesting_left}>
                        <div className={classes.block_input}>
                            <input onChange={updateFlat}  value={props.addressPage.flat} type='text'  className={classes.input}/>
                            <label className={classes.label_text}>Квартира/Офис</label>
                        </div>
                    </div>
                </div>
                <div className={classes.nesting}>
                    <div className={classes.nesting_right}>
                        <div className={classes.block_input}>
                            <input onChange={updateIndex} value={props.addressPage.index} type='text'  className={classes.input}/>
                            <label className={classes.label_text}>Индекс</label>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    </div>
    </div>
};
export default AddAddress;