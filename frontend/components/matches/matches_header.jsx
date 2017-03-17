import React from 'react';
import Rheostat from 'rheostat';

export default class MatchesHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 25,
      editAge: false,
      editDistance: false,
      minAge: this.props.currentUser.min_age,
      maxAge: this.props.currentUser.max_age
    };
  }

  getGender() {
    let matchGender;
    const gender = this.props.currentUser.gender;
    const sexuality = this.props.currentUser.sexuality;

    if (sexuality === "Straight") {
      matchGender = gender === "Man" ? "Women " : "Men ";
      return matchGender;
    } else if (sexuality === "Gay"){
      matchGender = gender === "Man" ? "Men " : "Women ";
      return matchGender;
    } else {
      return "All genders ";
    }
  }

  ageSearch () {
    return(
      <div className={this.state.editAge === true ? "change-range" : "hidden"}>
        <div className='square'></div>
        <h3>Ages</h3>
        <input
          value={this.state.minAge}
          onChange={(e) => this.updateAge(e, "minAge")}/>
        <span className='to'>to</span>
        <input
          value={this.state.maxAge}
          onChange={(e) => this.updateAge(e, "maxAge")}/>
      </div>
    );
  }

  updateAge (e, minMax) {
    let newAge = e.target.value;
    if (this.interval) clearTimeout(this.interval);
    this.setState({[minMax]: newAge});
    this.interval = setTimeout(this.queryAgesandDistance(), 250);
  }

  distanceSearch () {
    return (
      <div className={this.state.editDistance === true ? "change-range" : "hidden"}>
        <div className='square distance-square'></div>
        Distance (in miles)
        <Rheostat
          snapPoints={[1, 5, 10, 20, 50, 100]}
          values={[this.state.distance]}
          onChange={(e) => this.setState({distance: e.values[0]}, this.queryAgesandDistance())}/>
      </div>
    );
  }

  queryAgesandDistance () {
    return () => {
      if (this.state.minAge < 18) this.state.minAge = 18;
      this.props.fetchMatches({
        min_age: this.state.minAge,
        max_age: this.state.maxAge,
        distance: this.state.distance
      });
    };
  }

  openAgeSearch (e) {
    e.stopPropagation();
    this.setState({editAge: !this.state.editAge, editDistance: false});
  }

  openDistanceSearch(e) {
    e.stopPropagation();
    this.setState({editDistance: !this.state.editDistance, editAge: false});
  }

  render () {
    const matchGender = this.getGender();

    return(
      <div className="matches-header">

        <span>{matchGender}</span>

        <span className="age-box">
          <span
            className='age-preference'
            onClick={(e) => this.openAgeSearch(e)}>
            between the ages of {this.state.minAge} and {this.state.maxAge + " "}
          </span>

          {this.ageSearch()}
        </span>

        <span className="age-box">
          <span
            className='age-preference'
            onClick={(e) => this.openDistanceSearch(e)}>
            located within {this.state.distance} miles of
          </span>
          <span>{" " + this.props.currentUser.zipcode}</span>

          {this.distanceSearch()}
        </span>

      </div>
    );
  }
}
