import React from 'react';

export default class Matches extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchThreads();
  }

  render () {
    const recentMessages = this.props.threads.map((thread, idx) => <li key={idx}>{thread.lastMessage}</li>);
    return(
      <ul>
        {recentMessages}
      </ul>
    );
  }
}
