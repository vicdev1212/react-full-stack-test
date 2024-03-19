import React from 'react';

import logo from '@/assets/logo.svg';
import logoblack from '@/assets/logo-black.svg';
import mainlogo from '@/assets/logo-main.svg';
import showbtn from '@/assets/show-btn-1.svg';
import hidebtn from '@/assets/show-btn-2.svg';

const Login = ({
  email,
  password,
  showPassword,
  handleEmailChange,
  handlePasswordChange,
  togglePasswordVisibility,
  handleSubmit,
}) => {
  return (
    <div className='container'>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='logo-black'>
        <img src={logoblack} alt="" />
      </div>
      <div className='logo-side'>
        <img src={mainlogo} className='logo-main' alt="" />
      </div>
      <div className='login-side'>
        <div className='descrip'>
          <h4 className='descrip-text'>Sign in to Vaultik</h4>
        </div>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit}>
          <div className='email'>
            <input type="email" className='email-field' placeholder='Email address' value={email} onChange={handleEmailChange} required minLength="1" />
          </div>
          <div className='password'>
            <input type={showPassword ? "text" : "password"} className='pass-field' placeholder='Password' value={password} onChange={handlePasswordChange} required minLength="1" />
            <button type="button" className='show-btn' onClick={togglePasswordVisibility}>
              <img src={showPassword ? hidebtn : showbtn} style={{ width: '20px', height: '20px' }} alt="" />
            </button>
          </div>
          <a href="https://stage-admin.vaultik.com/auth/forgot-password"><p className="forgot">Forgot password?</p></a>
          <button type='submit' className='login-btn'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
