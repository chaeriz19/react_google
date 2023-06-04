import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PageHome from './pages/Home.tsx';
import PageLogin from './pages/Login.tsx';



export default function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route index element={<PageHome />}></Route>
        <Route path='/login' element={<PageLogin />}></Route>
      </Routes>
    </BrowserRouter>
  )
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

