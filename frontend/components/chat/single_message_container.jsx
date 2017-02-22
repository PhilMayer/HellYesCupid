import React from 'react';
import SingleMessage from './single_message';
import {connect} from 'react-redux';

const mapStateToProps = ({chat}, ownProps) => {
  return {
    loverId: chat.loverId,
    loverName: chat.lover,
    loverThumb: chat.thumb,
    message: ownProps.message,
    ownId: ownProps.currentUser.id,
    ownThumb: ownProps.currentUser.image_url
  };
};

export default connect(mapStateToProps)(SingleMessage);
