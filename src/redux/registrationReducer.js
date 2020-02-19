import {RegistrationAPI} from "../API/api";

const INPUT_TEXT_SURNAME = 'INPUT_TEXT_SURNAME';//Фамилия
const INPUT_TEXT_NAME = 'INPUT_TEXT_NAME';//Имя
const INPUT_TEXT_MIDDLE_NAME = 'INPUT_TEXT_MIDDLE_NAME';//Отчество
const INPUT_TEXT_PHONE = 'INPUT_TEXT_PHONE';//Телефон
const INPUT_TEXT_EMAIL = 'INPUT_TEXT_EMAIL';//Емаил
const INPUT_TEXT_PASSWORD = 'INPUT_TEXT_PASSWORD';//Пароль

const VALID_SURNAME = 'VALID_SURNAME';
const VALID_NAME = 'VALID_NAME';
const VALID_MIDDLE_NAME = 'VALID_MIDDLE_NAME';
const VALID_PHONE = 'VALID_PHONE';
const VALID_EMAIL = 'VALID_EMAIL';
const VALID_PASSWORD = 'VALID_PASSWORD';

const initialState = {
    surname: '1',
    validSurname: false,
    name: '2',
    validName: false,
    middleName: '3',
    validMiddleName: false,
    phone: '',
    validPhone: false,
    email: '5',
    validEmail: false,
    password: '6',
    validPassword: false
};

const RegistrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_TEXT_SURNAME:
            return {
                ...state,
                surname: action.bodySurname
            };
        case INPUT_TEXT_NAME:
            return {
                ...state,
                name: action.bodyName
            };
        case INPUT_TEXT_MIDDLE_NAME:

            return {
                ...state,
                middleName: action.bodyMiddleName
            };
        case INPUT_TEXT_PHONE:
            return {
                ...state,
                phone: action.bodyPhone
            };
        case INPUT_TEXT_EMAIL:
            return {
                ...state,
                email: action.bodyEmail
            };
        case INPUT_TEXT_PASSWORD:
            return {
                ...state,
                password: action.bodyPassword
            };
        case VALID_SURNAME:
            debugger
            return {
                ...state,
                validSurname: action.surnameBoolean
            };
        case VALID_PASSWORD:
            return {
                ...state,
                validPassword: true
            };
        case VALID_EMAIL:
            debugger
            return {
                ...state,
                validEmail:!state.validEmail
            };
        case VALID_NAME:
            return {
                ...state,
                validName:action.nameBoolean
            };
        default:
            return {...state}
    }
};
export const updateTextSurname = (surname) => ({type: INPUT_TEXT_SURNAME, bodySurname: surname});
export const updateTextName = (name) => ({type: INPUT_TEXT_NAME, bodyName: name});
export const updateTextMiddleName = (middleName) => ({type: INPUT_TEXT_MIDDLE_NAME, bodyMiddleName: middleName});
export const updateTextPhone = (phone) => ({type: INPUT_TEXT_PHONE, bodyPhone: phone});
export const updateTextEmail = (email) => ({type: INPUT_TEXT_EMAIL, bodyEmail: email});
export const updateTextPassword = (password) => ({type: INPUT_TEXT_PASSWORD, bodyPassword: password});

export const checkValidSurname = (boolean) => ({type: VALID_SURNAME, surnameBoolean:boolean});
const checkValidName = (boolean) => ({type: VALID_NAME, nameBoolean:boolean});
const checkValidMiddleName = () => ({type: VALID_MIDDLE_NAME});
const checkValidPhone = () => ({type: VALID_PHONE});
const checkValidEmail = () => ({type: VALID_EMAIL});
const checkValidPassword = () => ({type: VALID_PASSWORD});

export const addUser = (body) => {
    return () => {

        //RegistrationAPI.putRegistration(initialState.surname, initialState.name, initialState.middleName, initialState.phone, initialState.email, initialState.password)
        // else {
        //     //придумать сообщение об ошибке
        // }
    }
};
export const validSurname = (surname) => {
    return (dispatch) => {
         dispatch(updateTextSurname(surname));
        if (surname.length < 2) {
            dispatch(checkValidSurname(false));
            //Сообщение об ошибке
        }
        else {
            dispatch(checkValidSurname(true));
        }
    }
};
export const validName = (name) => {
    let lenghtName = name.length;
    return (dispatch) => {
        if (name.length < 2) {
            dispatch(checkValidName(false));
            //Сообщение об ошибке
        }
        else {
            dispatch(checkValidName(true));
        }
    }
};
export const validMiddleName = (middleName) => {
    return (dispatch) => {
        if (middleName.length < 2) {
            dispatch(checkValidMiddleName(false));
            //Сообщение об ошибке
        }
        else {
            dispatch(checkValidMiddleName(true));
        }
    }
};
export const validPhone = (phone) => {
    return (dispatch) => {
        //console.log(phone.replace([/()-+]*/g,''));
        if (phone.length < 2) {
            dispatch(checkValidMiddleName(false));
            //Сообщение об ошибке
        }
        else {
            dispatch(checkValidMiddleName(true));
        }
    }
};
export const validEmail = (email) => {
    return (dispatch) => {
    if(!/.+@.+\.[A-Za-z]+$/.test(email)){
        dispatch(checkValidEmail());
        console.log('длина меньше либо не то ввели')
    }
    else
    {
        dispatch(checkValidEmail());
    }

    }
};
export const validPassword = (password) => {
    return (dispatch) => {
        if (password.length < 6) {
            //Придумать как будет возвращать сообщение об ошибке
        }
        else if (!/[a-zA-Z]/.test(password)) {
            //
        }
        else {
            dispatch(checkValidPassword());
        }
    }
};


export default RegistrationReducer;

