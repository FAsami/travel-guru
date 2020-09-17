import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import {
  validate,
  initializeLoginFramework,
  handleGoogleSignIn,
  handleSignOut,
  handleFbSignIn,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from './LoginManager';

function Login() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
  });

  const [error, setError] = useState({ name: '', email: '', password: '' });
  initializeLoginFramework();
  const [setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const fbSignIn = () => {
    handleFbSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const signOut = () => {
    handleSignOut().then((res) => {
      handleResponse(res, false);
    });
  };

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const handleChange = (e) => {
    let isFieldValid = validate(e, error, setError);

    if (isFieldValid) {
      setError({});
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          handleResponse(res, true);
        }
      );
    }

    if (user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        handleResponse(res, true);
      });
    }
    e.preventDefault();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {user.isSignedIn ? (
        <button onClick={signOut}>Sign Out</button>
      ) : (
        <button onClick={googleSignIn}>Sign In</button>
      )}
      <br />
      <button onClick={fbSignIn}>Sign in using Facebook</button>
      {user.isSignedIn && (
        <div>
          <p>Welcome, {user.name}!</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt='' />
        </div>
      )}

      <label htmlFor='newUser'>New User Sign up</label>
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          type='text'
          onChange={handleChange}
          placeholder='Your name'
        />
        <div>{error.name}</div>
        <br />
        <input
          type='email'
          name='email'
          onChange={handleChange}
          placeholder='Your Email address'
          required
        />
        <div>{error.email}</div>
        <br />
        <input
          type='password'
          name='password'
          onChange={handleChange}
          placeholder='Your Password'
          required
        />
        <div>{error.password}</div>
        <br />
        <input type='submit' onClick={handleSubmit} value='Sign in' />
      </form>
      <p style={{ color: 'red' }}>{user.error}</p>
      {user.success && (
        <p style={{ color: 'green' }}>User Logged In successfully</p>
      )}
    </div>
  );
}

export default Login;
