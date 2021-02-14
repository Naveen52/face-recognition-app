import React from 'react';
import { render } from 'react-dom';

// This variable displays the navigation bar for registering new user

const Navigation = ()=>{
    return(
        <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
            <p>Sign In</p>
            <p>Register</p>
        </nav>
    )
};
 export default Navigation;