import React, { useState } from 'react';
import { login, loginStatus, logout } from '../../../axios/authentication';
import { btnpd } from '../../../util/util';

// const btnfn = () => console.log('login');

async function onLogin(
  setLoggedIn: React.Dispatch<React.SetStateAction<string>>
) {
  setLoggedIn(await login('mattm', 'password'));
}

async function onLogout(
  setLoginStatus: React.Dispatch<React.SetStateAction<string>>
) {
  await logout();
  setLoginStatus('');
}

async function onLoginStatus(
  setLoggedIn: React.Dispatch<React.SetStateAction<string>>
) {
  setLoggedIn(await loginStatus());
}

export default function LoginBtn() {
  const [loggedIn, setLoggedIn] = useState<string>('');
  const [loginStatus, setLoginStatus] = useState<string>('');

  return (
    <>
      <div>
        <button
          className='nav__login-btn'
          onClick={() => onLogin(setLoggedIn)}
          onMouseDown={btnpd}
        >
          login
        </button>
        <button
          className='nav__login-btn'
          onClick={() => onLogout(setLoggedIn)}
          onMouseDown={btnpd}
        >
          logout
        </button>
        <button
          className='nav__login-btn'
          onClick={() => onLoginStatus(setLoginStatus)}
          onMouseDown={btnpd}
        >
          status
        </button>
      </div>
      <div>user: {loggedIn}</div>
      <div>status: {loginStatus}</div>
    </>
  );
}
