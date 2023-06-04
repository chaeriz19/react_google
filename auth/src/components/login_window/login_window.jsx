import React from 'react';
import Google from '../google/google'


function Login_Window() {
    return (
        <div className='login_window'>
            <h1>Sign in</h1>
            <div className='login_window_input'>
                <div className='login_window_table'><label>Username</label><input></input></div>
                <div className='login_window_table'><label>Password</label><input></input></div>
                <button>Login</button>
            </div>
            
            <div>Or login with google</div>
            <Google></Google>
        </div>
    )
}

export default Login_Window;