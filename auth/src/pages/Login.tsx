import React from 'react';
import Google from '../components/google/google';
import Login_Window from '../components/login_window/login_window';

function PageLogin() {
    let page = window.location.pathname;
        return (
            <div className='container'>
                <Login_Window />
                <div>{ page }</div>
            </div>
        )
}

export default PageLogin;