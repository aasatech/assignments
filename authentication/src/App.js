import './index.css';
import { useCookies } from "react-cookie";
import Navigation from './components/navbar/NavbarComponent';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import UserHome from './components/pages/UserHome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import UserNav from './components/navbar/UserNav';
function App() {
  const [cookies, removeCookie] = useCookies();
  const token = cookies.token;
  return (
    <div className="App relative">
      <Router>
        {
          (token === undefined || token === 'undefined') ? <Navigation /> : <UserNav/>
        }
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/user' element={<UserHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
