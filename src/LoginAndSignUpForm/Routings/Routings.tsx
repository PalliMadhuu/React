import React, { FC, useState } from 'react';
import './Routings.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import Home from '../Home/Home';
import ProtectedGuard from '../../Guards/ProtectedGuard/ProtectedGuard';

interface RoutingsProps { }

const Routings: FC<RoutingsProps> = () => {
  const [isLogin, setLogin] = useState(false);
  function checkLogin() {
    setLogin(true);
  }
  return (
    <div className="Routings" data-testid="Routings">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<LoginForm checkLogin={checkLogin}></LoginForm>}></Route>
          <Route path='/signUpForm' element={<SignUpForm></SignUpForm>}></Route>
          <Route path='/HomePage' element={<ProtectedGuard component={<Home />} isLogin={isLogin} />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default Routings;
