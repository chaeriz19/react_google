import React, {useState, useEffect} from 'react';
import jwt_decode from "jwt-decode";
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Store } from 'react-notifications-component';
function Google() {

    const [ user, setUser ] = useState({});

    function handleResponse(resp){
        var obj = jwt_decode(resp.credential);
        console.log(obj);
        setUser(obj);
        document.getElementById("google-signin").hidden = true;
        Store.addNotification({
            title: "Success",
            message: "Logged in successfully",
            type: "success",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 2500,
              onScreen: true
            }
          });
    }
    function handleLogout(e) {
        setUser({});
        document.getElementById("google-signin").hidden = false;
        Store.addNotification({
            title: "Success",
            message: "Logged out successfully",
            type: "success",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 2500,
              onScreen: true
            }
          });
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
        client_id: "299429422698-lbtb3c5iuh7uoofu08gk5fks66f89c0v.apps.googleusercontent.com",
        callback: handleResponse
        });
        google.accounts.id.renderButton(
        document.getElementById("google-signin"),
        { theme: "outline", size: "large"}
        );
    });
    return (
    <div>
    <div id='google-signin'></div>
    { Object.keys(user).length != 0 &&
    <button id='logout' onClick={handleLogout}>Logout</button>
    }
    { user && 
    <div>   
        <img src={user.picture}></img>
        <h2>{user.name}</h2>
    </div>
    }
    </div>
    )
}

export default Google;