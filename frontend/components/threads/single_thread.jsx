import React from 'react';
import {withRouter} from 'react-router';

class SingleThread extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const thread = this.props.thread;
    const id = this.props.params.id;

    return(
      <li
        className="thread"
        key={this.props.idx}
        onClick={() => this.props.router.push(`profile/${id}/threads/${this.props.id}`)}>

        <img src={this.props.thread.thumb} />
        <span className="thread-username">{thread.lover}</span>
        <span className="last-message preview">{thread.lastMessage}</span>
        <span className="last-message date">{thread.lastMessageDate}</span>

      </li>
    );
  }
}

export default withRouter(SingleThread);
