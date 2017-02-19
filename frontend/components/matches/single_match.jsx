import React from 'react';

export default class SingleMatch extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div className="match">
        <img src={this.props.match.image}/>
        <span>{this.props.match.age}</span>
        <span>{this.props.match.zipcode}</span>
      </div>
    );
  }
}
