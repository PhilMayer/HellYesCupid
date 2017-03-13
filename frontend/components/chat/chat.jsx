import React from 'react';
import SingleMessageContainer from './single_message_container';
import {createMessage} from '../../util/thread_api_util';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newMessage: "",
      numMessagesToDisplay: 5
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

  // <img src={this.props.currentUser.image_url}/>
  writeNewMessage () {
    return(
      <div className="new-message-area">

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
    let styledMessages;
    let messagesNotDisplayed;
    const messages = this.props.chat.messages;

    if(messages) {
      messagesNotDisplayed = messages.length - this.state.numMessagesToDisplay;
      styledMessages = messages.slice(0, this.state.numMessagesToDisplay).map((message, idx) => (
        <SingleMessageContainer
          key={idx}
          message={message}
          currentUser={this.props.currentUser}/>
      ));
    }

    return (
      <div className="blue-background">
        <ul className="chat">
          <p
            onClick={() => this.setState({numMessagesToDisplay: messages.length})} 
            className={messagesNotDisplayed > 0 ? "older-messages" : "hidden"}>
            See {messagesNotDisplayed} older messages
          </p>
          {styledMessages}
          <li>{this.writeNewMessage()}</li>
        </ul>
      </div>
    );
  }
}
