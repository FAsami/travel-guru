import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../image/Logo.png';
import { handleSignOut } from '../SignIn/signInManager';
import SearchField from './SearchField';

export default function Navbar() {
  const [user, setUser] = useContext(UserContext);

  const logOut = () => {
    handleSignOut().then((res) => {
      setUser(res);
    });
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarToggler'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <Link className='navbar-brand' to='/'>
        <img
          src={logo}
          alt='Travel Guru'
          style={{ height: '50px', width: '100px' }}
        />
      </Link>
      <div className='collapse navbar-collapse' id='navbarToggler'>
        <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
          <li className='nav-item'>
            <SearchField />
          </li>
          <li className='nav-item active'>
            <Link className='nav-link' to='#'>
              News
            </Link>
          </li>

          <li className='nav-item active'>
            <Link className='nav-link' to='#'>
              Destination
            </Link>
          </li>
          <li className='nav-item active'>
            <Link className='nav-link' to='#'>
              Blog
            </Link>
          </li>
          <li className='nav-item active'>
            <Link className='nav-link' to='#'>
              Contact
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              {user.name ? user.name : null}
            </Link>
          </li>
          <li className='nav-item active'>
            <Link className='nav-link' to='/login'>
              <button className='btn btn-warning' onClick={logOut}>
                {user.name ? 'Logout' : 'LogIn'}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
