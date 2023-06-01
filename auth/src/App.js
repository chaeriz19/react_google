import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import jwt_decode from "jwt-decode";

function App() {

  function handleResponse(resp){
    var obj = jwt_decode(resp.credential);
    console.log(obj);
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
      <div id='google-signin'></div>
    </div>
  );
}

export default App;
