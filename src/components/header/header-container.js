import React from 'react';
import '../../css/header.css';
import {connect} from "react-redux";
import Header from "./header";
import {authMe} from "../../redux/auth-reducer";
class HeaderCont extends React.Component {
    componentDidMount() {
      this.props.authMe();
    }
    render() {
        return <Header {...this.props} login={this.props.login} isAuth={this.props.isAuth}/>
    }
    }
let mapStateToProps = (state) => {
    return {
            Sidebar: state.Sidebar,
            login:state.Auth.login,
            isAuth:state.Auth.isAuth
    }
    }
const HeaderContainer = connect(mapStateToProps, {authMe})(HeaderCont);
export default HeaderContainer;