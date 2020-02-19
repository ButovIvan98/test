import {applyMiddleware, combineReducers, createStore} from "redux";
import ContentReducer from "./content-reducer";
import DialogsReducer from "./dialogs-reducer";
import SidebarReducer from "./header-reducer";
import UsersReducer from "./users-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import AddressReducer from "./addressReducer";
import RegistrationReducer from "./registrationReducer";
let reducers= combineReducers({
    ProfilePage:ContentReducer,
    messagePage:DialogsReducer,
    Sidebar:SidebarReducer,
    UsersPage:UsersReducer,
    Auth:AuthReducer,
    Address : AddressReducer,
    Registration : RegistrationReducer
});
let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store=store;
export default store;