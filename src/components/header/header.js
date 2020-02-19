import React from 'react';
import Permanent_main from "./Permanent_main/PermanentMain";
import VariableContainerMain from "./Variable_main/Variable_mainContainer";

const Header=(props)=>{
    return <div>
        <Permanent_main />
        <VariableContainerMain />
    </div>
    };
export default Header;