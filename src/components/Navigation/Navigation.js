import React from 'react';
import { render } from 'react-dom';

// This variable displays the navigation bar for registering new user

const Navigation = ({onRouteChange})=>{
    return(
        <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
            <p className="f3 link underline pointer dim black pa3">Sign In</p>
            <p onClick={() => onRouteChange('register')}className="f3 link underline pointer dim black pa3">Register</p>
        </nav>
    )
};
 export default Navigation;