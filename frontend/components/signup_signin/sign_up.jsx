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
        sexualityDrop: false,
        zipcodeError: false,
        ageError: false,
        emailsMatch: false
    };
  }

  part1Update(field) {
    const fieldDrop = `${field}Drop`;
    return (e) => {
      e.stopPropagation();
      this.setState({[field]: e.target.getAttribute("value"), [fieldDrop]: false});
    };
  }

  part2Update(field) {
    const err = `${field}Error`;
    return (e) => {
      this.setState({[field]: e.target.value, [err]: false});
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
        <img src={window.images.logo} className="big-logo"/>

        <h2>Join the second best free dating site on Earth.</h2>
            <span className="i-am-a">I am a </span>

              <div className="signup-dropdown"

                onClick={() => this.setState({sexualityDrop: !this.state.sexualityDrop})}>
                {this.state.sexuality}
                <span className="arrow">▼</span>

                <ul onClick={this.part1Update('sexuality')}
                  className={this.state.sexualityDrop ? "" : "hidden"}>
                  <li value="Straight">Straight</li>
                  <li value="Gay">Gay</li>
                  <li value="Bisexual">Bisexual</li>
                </ul>
              </div>

              <div className="signup-dropdown"
                onClick={() => this.setState({genderDrop: !this.state.genderDrop})}>
                {this.state.gender}
                <span className="arrow">▼</span>

                <ul onClick={this.part1Update('gender')}
                  className={this.state.genderDrop ? "" : "hidden"}>
                  <li value="Woman">Woman</li>
                  <li value="Man">Man</li>
                </ul>
              </div>

            <button id="big-green-button" onClick={() => this.setState({part:2})}>Continue</button>
      </div>
    );
  }

  part2() {
    return(
      <div className="signup">
        <img src={window.images.logo} className="big-logo"/>
        <h2>Almost there! Just a little more to go.</h2>

        <label htmlFor="age">Age</label>
        <input onChange={this.part2Update('age')} id="age" type="text" value={this.state.age} />
        <p className={this.state.ageError ? "" : "hidden"}>Hmmm yeah enter a valid age please</p>

        <label htmlFor="zipcode">Zipcode</label>
        <input onChange={this.part2Update('zipcode')} id="zipcode" type="text" value={this.state.zipcode} placeholder="e.g. 10001"/>
        <p className={this.state.zipcodeError ? "" : "hidden"}>Yeeah...enter a valid zipcode please</p>

        <label htmlFor="email">Email</label>
        <div className="signup-email">
          <input onChange={this.part2Update('email')} id="email" type="email" value={this.state.email} placeholder="e.g. example@url.com"/>
          <input onChange={this.compareEmails()} id="email" type="email" value={this.state.confirmEmail} placeholder="Confirm email"/>
          <p className={this.state.emailsMatch ? "" : "hidden"}>It's a match!</p>
        </div>

        <button id="big-blue-button" onClick={() => this.completePart2()}>Next</button>
      </div>
    );
  }

  compareEmails() {
    return (e) => {
      if(this.state.email === e.target.value) {
        this.setState({emailsMatch: true});
      }
    };
  }

  completePart2() {
    if(this.state.age === "" || this.state.age < 18) {
      this.setState({ageError: true});
    } else if (this.state.zipcode === "" || this.state.zipcode.length !== 5) {
      this.setState({zipcodeError: true});
    } else {
      this.setState({part:3});
    }
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
