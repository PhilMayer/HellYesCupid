import React from 'react';
import SingleThread from './single_thread';

export default class Matches extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchThreads();
  }

  render () {
    const threads = this.props.threads;
    const threadIds = Object.keys(threads);
    const arrayOfThreads = Object.keys(threads).map(id => threads[id]);

    const recentMessages = arrayOfThreads.map((thread, idx) => (
      <SingleThread thread={thread} id={threadIds[idx]} idx={idx}/>)
    );

    return(
      <ul>
        {recentMessages}
      </ul>
    );
  }
}
