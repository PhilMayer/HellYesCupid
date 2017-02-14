import React from 'react';
import SessionFormContainer from './session_form_container';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: "",
        sexuality: "",
        gender: "",
        age: "",
        zipcode: "",
        email: "",
        part: 1
    };
    // this.signUpPart = 1;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  part1 () {
    return(
      <div>
        <h1>Join the second best free dating site on Earth</h1>
            I am a
            <select onChange={this.update('sexuality')} name="sexuality">
              <option value="straight">Straight</option>
              <option value="gay">Gay</option>
              <option value="bisexual">Bisexual</option>
            </select>

            <select onChange={this.update('gender')} name="gender">
              <option value="woman">Woman</option>
              <option value="man">Man</option>
            </select>

            <button onClick={() => this.setState({part:2})}>Continue</button>
      </div>
    );
  }

  part2() {
    return(
      <div>
        <h1>Almost there! Just a little more to go.</h1>
        <label htmlFor="age">Age</label>
        <input id="age" type="text" value={this.state.age} />

        <label htmlFor="zipcode">Zipcode</label>
        <input id="zipcode" type="text" value={this.state.zipcode} placeholder="e.g. 10001"/>

        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={this.state.email} placeholder="e.g. example@url.com"/>
        <input id="email" type="text" placeholder="Confirm email"/>

        <button onClick={() => this.setState({part:3})}>Next</button>
      </div>
    );
  }

  render () {
    switch(this.state.part) {
      case 1:
        return this.part1();
      case 2:
        return this.part2();
      case 3:
        return (<SessionFormContainer formType='signup' userInfo={this.state}/>);
      default:
        return null;
    }
  }
}

export default Signup;
