import React from 'react';
import {Link, hashHistory} from 'react-router';

const Nav = (props) => {

  if(props.currentUser) {
    return (
      <div className="nav">
        <h2>Browse Matches</h2>
        <button onClick={() => props.logout().then(hashHistory.push('/login'))}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className="nav boobies">
        <span>Have an account?</span>
        <div>
          <Link to='/login'>Sign in</Link>
        </div>
      </div>
    );
  }
};

// <div>
//   <Link to='/signup'>Sign up</Link>
// </div>
export default Nav;
