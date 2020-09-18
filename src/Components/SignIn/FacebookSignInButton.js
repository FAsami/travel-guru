import React, { useContext } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleFacebookSignIn } from './signInManager';

function FacebookSignInButton() {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };

  const facebookSignIn = () => {
    handleFacebookSignIn().then((res) => {
      setUser(res);
      history.replace(from);
    });
  };
  return (
    <button
      className='btn btn-outline-secondary  btn-block font-weight-bold'
      style={{ borderRadius: '25px' }}
      onClick={facebookSignIn}
    >
      <FaFacebook color='#3b5998' /> Sign in with Facebook
    </button>
  );
}

export default FacebookSignInButton;
