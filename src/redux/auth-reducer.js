import { userAPI} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    idUser: null,
    email: null,
    login: null,
    isAuth:false

}
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            };
        default:
            return state;
    }
};
export const setUserData = (idUser, email, login) => ({type: SET_USER_DATA, data:{idUser, email, login}});
export const authMe=()=>{
    return (dispatch)=>{
        userAPI.getMe().then(response => {
               if (response.resultCode === 0) {
                let {id, email, login}=response.data;
                dispatch(setUserData(id, email, login));
            }
        });
    }
};
export default AuthReducer;