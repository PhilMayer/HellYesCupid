import React from 'react';
import {Link, hashHistory} from 'react-router';

const Nav = (props) => {

  if(props.currentUser) {
    return (
      <div>
        <h2>Welcome, {props.currentUser.username}!</h2>
        <button onClick={() => props.logout().then(hashHistory.push('/login'))}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className="nav">
        <div>
          <Link to='/login'>Sign in</Link>
        </div>
        <span>Have an account?</span>
      </div>
    );
  }
};

// <div>
//   <Link to='/signup'>Sign up</Link>
// </div>
export default Nav;
