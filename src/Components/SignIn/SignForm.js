import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import InputField from './InputField';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from './signInManager';

import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from './validation';

function SignForm({ isNewUser }) {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };

  const [input, setInput] = useState({});
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = `${input.firstName} ${input.lastName}`;
    if (isNewUser) {
      createUserWithEmailAndPassword(name, input.email, input.password).then(
        (res) => {
          handleResponse(res, true);
        }
      );
    }
    if (!isNewUser) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        handleResponse(res, true);
      });
    }
  };

  const handleResponse = (res, redirect) => {
    setUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === 'firstName') validateFirstName(value, error, setError);
    if (name === 'lastName') validateLastName(value, error, setError);
    if (name === 'email') validateEmail(value, error, setError);
    if (name === 'password') validatePassword(value, error, setError);
    if (name === 'confirmPassword')
      validateConfirmPassword(input.password, value, error, setError);
    setInput({ ...input, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      {isNewUser && (
        <>
          <InputField
            type='text'
            label='First Name'
            name='firstName'
            handleChange={handleChange}
            error={error.firstName}
          />
          <InputField
            type='text'
            label='Last Name'
            name='lastName'
            handleChange={handleChange}
            error={error.lastName}
          />
        </>
      )}
      <InputField
        type='email'
        label='Email'
        name='email'
        handleChange={handleChange}
        error={error.email}
      />
      <InputField
        type='password'
        label='Password'
        name='password'
        handleChange={handleChange}
        error={error.password}
      />
      {isNewUser && (
        <InputField
          type='password'
          label='Confirm Password'
          name='confirmPassword'
          handleChange={handleChange}
          error={error.confirmPassword}
        />
      )}
      <input
        type='submit'
        className='btn btn-warning btn-block font-weight-bold'
        value={isNewUser ? 'Create an account' : 'Login'}
      />
    </form>
  );
}

export default SignForm;
