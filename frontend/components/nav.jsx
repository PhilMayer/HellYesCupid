import React from 'react';
import {Link} from 'react-router';

const Nav = (props) => {
  if(props.currentUser) {
    return (
      <div>
        <h2>Welcome, {props.currentUser.username}!</h2>
        <button onClick={() => props.logout()}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
      </div>
    );
  }
};

export default Nav;
