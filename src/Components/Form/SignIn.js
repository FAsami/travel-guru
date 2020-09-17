import React, { useContext, useState } from 'react';
import './inputFieldStyle.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import {
  handleGoogleSignIn,
  handleFacebookSignIn,
  handleSignOut,
  initializeLoginFramework,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from './signInManager';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

initializeLoginFramework();

function SignIn() {
  const [user, setUser] = useContext(UserContext);

  const history = useHistory();
  const [error, setError] = useState({});
  const [isNewUser, setIsNewUser] = useState(true);

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const facebookSignIn = () => {
    handleFacebookSignIn().then((res) => {
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
    // if (redirect) {
    //   history.replace(from);
    // }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    if (user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          handleResponse(res, true);
        }
      );
    }

    // if (user.email && user.password) {
    //   signInWithEmailAndPassword(user.email, user.password).then((res) => {
    //     handleResponse(res, true);
    //   });
    // }
    e.preventDefault();
  };

  console.log(user);
  return (
    <div className='row justify-content-center align-items-center'>
      <div className='col-sm-12 col-md-6'>
        <div className='card px-5 pt-2'>
          <h4 className='mb-4'>{isNewUser ? 'Create an account' : 'Login'}</h4>
          <form onSubmit={handleSubmit}>
            {isNewUser && (
              <>
                <div className='group'>
                  <input
                    required
                    name='firstName'
                    onChange={handleChange}
                    className='input-field'
                  />
                  <span className='highlight'></span>
                  <span className='bar'></span>
                  <label className='input-label'>First name</label>
                  <small className='text-danger'>{error.firstName}</small>
                </div>

                <div className='group'>
                  <input
                    className='input-field'
                    name='lastName'
                    required
                    onChange={handleChange}
                  />
                  <span className='highlight'></span>
                  <span className='bar'></span>
                  <label className='input-label'>Last name</label>
                  <small className='text-danger'>{error.lastName}</small>
                </div>
              </>
            )}

            <div className='group'>
              <input
                className='input-field'
                required
                name='email'
                type='email'
                onChange={handleChange}
              />
              <span className='highlight'></span>
              <span className='bar'></span>
              <label className='input-label'>Email or username</label>
              <small className='text-danger'>{error.email}</small>
            </div>
            <div className='group'>
              <input
                className='input-field'
                required
                name='password'
                type='password'
                onChange={handleChange}
              />
              <span className='highlight'></span>
              <span className='bar'></span>
              <label className='input-label'>Password</label>
              <small className='text-danger'>{error.password}</small>
            </div>
            {isNewUser && (
              <div className='group'>
                <input
                  className='input-field'
                  required
                  name='confirmPassword'
                  type='password'
                  onChange={handleChange}
                />
                <span className='highlight'></span>
                <span className='bar'></span>
                <label className='input-label'>Confirm password</label>
                <small className='text-danger'>{error.confirmPassword}</small>
              </div>
            )}

            <button
              type='submit'
              className='btn btn-warning btn-block font-weight-bold'
            >
              {isNewUser ? 'Create an account' : 'Login'}
            </button>
          </form>

          <p className='text-center mt-2'>
            {isNewUser
              ? `Already have an account ?`
              : `Don't have an account ?`}

            <span
              className='text-warning'
              style={{ cursor: 'pointer' }}
              onClick={() => setIsNewUser(!isNewUser)}
            >
              {isNewUser ? 'Login' : 'Register'}
            </span>
          </p>
        </div>
        <hr className='hr-text' data-content='or'></hr>

        <div className='px-5'>
          <button
            className='btn btn-block btn-outline-secondary font-weight-bold mb-2'
            style={{ borderRadius: '25px' }}
            onClick={googleSignIn}
          >
            <FcGoogle /> Sign in with Google
          </button>
          <button
            className='btn btn-outline-secondary  btn-block font-weight-bold'
            style={{ borderRadius: '25px' }}
            onClick={facebookSignIn}
          >
            <FaFacebook color='#3b5998' /> Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
