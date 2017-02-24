import React from 'react';
import {hashHistory} from 'react-router';

export default class SingleMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {message, ownId, ownThumb, loverId, loverThumb} = this.props;
    const ownMessage = (message.author_id === ownId);
    const thumb = ownMessage ? ownThumb : loverThumb;

    return (
      <li>
        <img
          src={thumb}
          onClick={() => ownMessage ? hashHistory.push(`profile/${ownId}`) :
            hashHistory.push(`profile/${loverId}`)}/>

        <p className={ownMessage ? "message-body blue" : "message-body"}>
          {message.body}
          <span className={ownMessage ? "pointy-thing blue-pointy" : "pointy-thing"}></span>
        </p>
      </li>
    );
  }
}
