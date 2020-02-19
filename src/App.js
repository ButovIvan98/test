import React from 'react';
import classes from './index.module.css'
import Footer from './components/footer/footer';
import {Route} from "react-router-dom";
import HeaderContainer from "./components/header/header-container";
import MyAddress from "./components/express/my_address/my_address";
import RegistrationContainerExport from "./components/authorization/registrationUser/registrationContainer";

const App = () => {
    return (
            <div className={classes.main}>
                <HeaderContainer/>
                <div className={classes.container}>
                    <Route path='/express' render={() => <MyAddress />}/>
                    <Route path='/cargo' render={()=><RegistrationContainerExport />}/>
                </div>
                <Footer/>
            </div>
    );
};
export default App;
