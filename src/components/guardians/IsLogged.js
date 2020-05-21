import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from 'react-router';



export function isLogin(component) {
    let jwt_Token = JSON.parse(localStorage.getItem('login_parameters'))
    console.log(jwt_Token)
    if (jwt_Token) {
        return <Redirect to="/"/>
    } else {
        return component
    }
}
