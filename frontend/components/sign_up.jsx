import React from 'react';
import SessionFormContainer from './session_form_container';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: "",
        sexuality: "Straight",
        gender: "Woman",
        age: "",
        zipcode: "",
        email: "",
        part: 1,
        genderDrop: false,
        sexualityDrop: false
    };
    // this.signUpPart = 1;
  }

  update(field) {
    const fieldDrop = `${field}Drop`;
    return (e) => {
      e.stopPropagation();
      this.setState({[field]: e.target.getAttribute("value"), [fieldDrop]: false});
    };
  }

  // <select onChange={this.update('sexuality')} name="sexuality">
  //   <option value="straight">Straight</option>
  //   <option value="gay">Gay</option>
  //   <option value="bisexual">Bisexual</option>
  // </select>
  // <select onChange={this.update('gender')} name="gender">
  //   <option value="woman">Woman</option>
  //   <option value="man">Man</option>
  // </select>

  part1 () {
    return(
      <div className="signup">
        <h1>HellYesCupid</h1>
        <h2>Join the second best free dating site on Earth.</h2>
            <span className="i-am-a">I am a </span>

              <div className="signup-dropdown" onClick={() => this.setState({sexualityDrop: true})}>{this.state.sexuality}<span className="arrow">▼</span>
                <ul onClick={this.update('sexuality')} className={this.state.sexualityDrop ? "" : "hidden"}>
                  <li value="Straight">Straight</li>
                  <li value="Gay">Gay</li>
                  <li value="Bisexual">Bisexual</li>
                </ul>
              </div>

              <div className="signup-dropdown" onClick={() => this.setState({genderDrop: true})}>{this.state.gender}<span className="arrow">▼</span>
                <ul onClick={this.update('gender')} className={this.state.genderDrop ? "" : "hidden"}>
                  <li value="Woman">Woman</li>
                  <li value="Man">Man</li>
                </ul>
              </div>

            <button onClick={() => this.setState({part:2})}>Continue</button>
      </div>
    );
  }

  part2() {
    return(
      <div className="signup">
        <h1>HellYesCupid</h1>
        <h2>Almost there! Just a little more to go.</h2>
        <label htmlFor="age">Age</label>
        <input onChange={this.update('age')} id="age" type="text" value={this.state.age} />

        <label htmlFor="zipcode">Zipcode</label>
        <input onChange={this.update('zipcode')} id="zipcode" type="text" value={this.state.zipcode} placeholder="e.g. 10001"/>

        <label htmlFor="email">Email</label>
        <div className="signup-email">
          <input onChange={this.update('email')} id="email" type="email" value={this.state.email} placeholder="e.g. example@url.com"/>
          <input id="email" type="text" placeholder="Confirm email"/>
        </div>

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
        return (<SessionFormContainer formType='signup' signUpInfo={this.state}/>);
      default:
        return null;
    }
  }
}

export default Signup;
