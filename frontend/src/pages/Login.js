import React from 'react';
import Navbar from "../Components/Navbar/Navbar.jsx";
import Login from "../Components/LoginSignup/Login.js";

export default function LoginPage(){
    return(
        <React.Fragment>
            <Navbar />
            <Login />
        </React.Fragment>
    );
}
