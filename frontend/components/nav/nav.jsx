import React from 'react';
import {Link, hashHistory, withRouter} from 'react-router';

const Nav = (props) => {
  if(props.currentUser) {
    return (
      <div className="nav">
        <img onClick={() => hashHistory.push(`/profile/${props.currentUser.id}`)} src={window.images.small} className="small-logo"/>
        <h2 onClick={() => hashHistory.push("/matches")}>Browse Matches</h2>
        <h2 onClick={() => hashHistory.push(`/profile/${props.currentUser.id}/threads`)}>Messages</h2>
        <h2 onClick={() => hashHistory.push(`/profile/${props.currentUser.id}/questions`)}>Questions</h2>

        <div id="chat-and-thumb">
          <img
            className="nav-thumb"
            src={props.currentUser.image_url}
            onClick={() => hashHistory.push(`/profile/${props.currentUser.id}`)}/>
        </div>

        <button onClick={() => props.logout().then(hashHistory.push("/login"))}>Logout</button>
      </div>
    );
  } else if (props.location.pathname === "/signup" || props.location.pathname === "/"){
    return (
      <div className="nav flex">
        <span>Have an account?</span>
        <div>
          <Link to='/login'>Sign in</Link>

          <button className="demo-login" onClick={() => props.login({
              username: "findingDemo",
              password: "starwars"
            }).then((user) => hashHistory.push(`/matches`))}>
            Demo Login
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="nav flex">
          <Link to='/signup'>Sign Up</Link>
      </div>
    );
  }
};

export default withRouter(Nav);
