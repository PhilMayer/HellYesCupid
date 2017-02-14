import React from 'react';
import {Link, withRouter} from 'react-router';
import merge from 'lodash/merge';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: "",
        min_age: 18,
        max_age: 99
    };
    this.state = merge(this.state, props.signUpInfo);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount () {
  //   this.props.clearErrors();
  // }

  componentWillReceiveProps(newProps) {
    if(newProps.formType !== this.props.formType) {
      this.setState({username: "", password: ""});
    }

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => this.props.router.push('/'));
    //clear form
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    const link = this.props.formType === 'signup' ? '/login' : '/signup';
    const text = link === '/login' ? "Join the second best free dating site on earth" : "Sign In";
    const submitButton = link === '/login' ? "Hell yes, create my account" : "Hell yes, log me in";

    let errors;
    if(this.props.errors) {
      errors = this.props.errors.join(", ");
    }

    return (
      <div>
        <Link to={link}>{link.substring(1)}</Link>

        <h2>{text}</h2>
        <form onSubmit={this.handleSubmit}>

          <input onChange={this.update('username')} type="text" value={this.state.username} placeholder="username"/>
          <input onChange={this.update('password')} type="text" value={this.state.password} placeholder="password"/>

          <p>{errors}</p>

          <input type="submit" value={submitButton}/>
          </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
