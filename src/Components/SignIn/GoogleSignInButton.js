import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleGoogleSignIn } from './signInManager';

function GoogleSignInButton() {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setUser(res);
      history.replace(from);
    });
  };

  return (
    <button
      className='btn btn-block btn-outline-secondary font-weight-bold mb-2'
      style={{ borderRadius: '25px' }}
      onClick={googleSignIn}
    >
      <FcGoogle /> Sign in with Google
    </button>
  );
}

export default GoogleSignInButton;
