import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PageHome from './pages/Home.tsx';
import PageLogin from './pages/Login.tsx';
import { ReactNotifications } from 'react-notifications-component'
import Error from './pages/Error.tsx';

export default function App() {
  return (
  <BrowserRouter>
  <ReactNotifications />
      <Routes>
        <Route index element={<PageHome />}></Route>
        <Route path='/home' element={<PageHome />}></Route>
        <Route path='/login' element={<PageLogin />}></Route>
        <Route path='*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

