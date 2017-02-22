import React from 'react';
import SingleMessageContainer from './single_message_container';
import {createMessage} from '../../util/thread_api_util';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newMessage: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.props.fetchThread(this.props.id);

  }

  handleSubmit () {
    const messageParams = {
      thread_id: this.props.id,
      author_id: this.props.currentUser.id,
      body: this.state.newMessage
    };

    createMessage(messageParams)
      .then(() => this.props.fetchThread(this.props.id))
        .then(this.setState({newMessage: ""}));
  }

  writeNewMessage () {
    return(
      <div className="new-message-area">
        <img src={this.props.currentUser.image}/>
        
        <textarea
          className="new-message"
          value={this.state.newMessage}
          placeholder="For god's sake just be yourself"
          onChange={(e) => this.setState({newMessage: e.target.value})}>
          {this.state.newMessage}
        </textarea>

        <button
          className="answer-button"
          onClick={() => this.handleSubmit()}>
          Send
        </button>
      </div>
    );
  }

  render () {
    const messages = this.props.chat.messages;
    let styledMessages;

    if(messages) {
      styledMessages = messages.map(message => (
        <SingleMessageContainer
          message={message}
          currentUser={this.props.currentUser}/>
      ));
    }

    return (
      <div className="blue-background">
        <ul className="chat">
          {styledMessages}
          <li>{this.writeNewMessage()}</li>
        </ul>
      </div>
    );
  }
}
