import React from 'react';
import SingleMessageContainer from './single_message_container';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchThread(this.props.id);
  }

  render () {
    const messages = this.props.chat.messages;
    let styledMessages;

    if(messages) {
      styledMessages = messages.map(message => (
        <SingleMessageContainer
          message={message}
          currentUser={this.props.currentUser}
          />
      ));
    }

    return (
      <ul>
        {styledMessages}
      </ul>
    );
  }
}
