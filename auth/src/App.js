import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import jwt_decode from "jwt-decode";

function App() {
  const [ user, setUser ] = useState({});
  function handleResponse(resp){
    var obj = jwt_decode(resp.credential);
    console.log(obj);
    setUser(obj);
    document.getElementById("google-signin").hidden = true;
  }
  function handleLogout(e) {
    setUser({});
    document.getElementById("google-signin").hidden = false;
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
    <div className="App">
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
    </div>
  );
}

export default App;
