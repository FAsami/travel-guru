import React, { useState } from 'react';
import './inputFieldStyle.css';
import { initializeLoginFramework } from './signInManager';

import GoogleSignInButton from './GoogleSignInButton';
import FacebookSignInButton from './FacebookSignInButton';
import SignForm from './SignForm';

initializeLoginFramework();

function SignIn() {
  const [isNewUser, setIsNewUser] = useState(true);

  return (
    <div className='row justify-content-center align-items-center'>
      <div className='col-sm-12 col-md-6'>
        <div className='card px-5 pt-2'>
          <h4 className='mb-4'>{isNewUser ? 'Create an account' : 'Login'}</h4>
          <SignForm isNewUser={isNewUser} />
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
          <GoogleSignInButton />
          <FacebookSignInButton />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
