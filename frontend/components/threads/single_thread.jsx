import React from 'react';
import {hashHistory} from 'react-router';

export default class Matches extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const thread = this.props.thread;

    return(
      <li
        className="thread"
        key={this.props.idx}
        onClick={hashHistory.push(`threads/${this.props.id}`)}>

        <img src={this.props.thread.thumb} />
        <span className="thread-username">{thread.lover}</span>
        <span className="last-message preview">{thread.lastMessage}</span>
        <span className="last-message date">{thread.lastMessageDate}</span>

      </li>
    );
  }
}
