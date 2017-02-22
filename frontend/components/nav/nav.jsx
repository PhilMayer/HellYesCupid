import React from 'react';
import {Link, hashHistory, withRouter} from 'react-router';

const Nav = (props) => {
  if(props.currentUser) {
    return (
      <div className="nav">
        <h2>Browse Matches</h2>
        <button onClick={() => props.logout().then(hashHistory.push('/login'))}>Logout</button>
      </div>
    );
  } else if (props.location.pathname === "/signup" || props.location.pathname === "/"){
    return (
      <div className="nav boobies">
        <span>Have an account?</span>
        <div>
          <Link to='/login'>Sign in</Link>

          <button onClick={() => props.login({
              username: "findingDemo",
              password: "starwars"
            }).then(() => hashHistory.push("/matches"))}>
            Demo Login
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="nav boobies">
          <Link to='/signup'>Sign Up</Link>
      </div>
    );
  }
};

// <div>
//   <Link to='/signup'>Sign up</Link>
// </div>
export default withRouter(Nav);
