import React from 'react';
import AddAddress from "../../express/my_address/add_address/add_address";
import Registration from "./registration";
import {connect} from "react-redux";
import {
    addUser,
    updateTextEmail,
    updateTextMiddleName,
    updateTextName,
    updateTextPassword,
    updateTextPhone,
    updateTextSurname, validEmail, validMiddleName, validName, validPassword, validPhone,
    validSurname
} from "../../../redux/registrationReducer";

class RegistrationForm extends React.Component{

    render() {
        return <Registration {...this.props} address={this.props.addressPage}/>
    }
}
let mapStateToProps=(state)=>{
    return{
        registrationPage:state.Registration
    }
};
const RegistrationContainerExport = connect(mapStateToProps,{validName,validSurname,validMiddleName,validPhone,validEmail,validPassword,
    addUser,updateTextName,updateTextMiddleName,updateTextPhone,updateTextEmail,updateTextPassword})(RegistrationForm)
export default RegistrationContainerExport;