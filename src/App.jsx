import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { userState, getFullName } from '@/store';
import Home from '@/pages/Home';
import AuthLayout from '@/components/layouts/AuthLayout';
import NonAuthLayout from '@/components/layouts/NonAuthLayout';
import Login from '@/pages/Login';
import '@/styles/App.css';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useRecoilState(userState);
  const fullName = useRecoilValue(getFullName);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onLogin = () => {
    if (!isLoggedIn) {
      setUser({
        userEmail: email,
        firstName: "Oliver",
        lastName: "Fink",
      });
      setLoggedIn(true);
    }
    navigate('/home');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {                        
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
  };

  return (
    <div>
      <Routes>
        <Route path='/' exact element={
          <NonAuthLayout>
            <Login
              email={email}
              password={password}
              showPassword={showPassword}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              togglePasswordVisibility={togglePasswordVisibility}
              handleSubmit={handleSubmit}
            />
          </NonAuthLayout>
        } />

        <Route path='/home' element={
          <AuthLayout isSignedIn={isLoggedIn}>
            <Home email={user.userEmail} userName={fullName} />
          </AuthLayout>
        } />
      </Routes>
    </div>
  );
}

export default App;
