import React from 'react';
import {hashHistory} from 'react-router';

export default class SingleMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {message, ownName, ownThumb, loverName, loverThumb} = this.props;

    let thumb;
    let name;
    return (
      <h1>{this.props.message.body}</h1>
    );
  }
}
