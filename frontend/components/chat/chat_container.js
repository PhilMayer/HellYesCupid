import React from 'react';
import Chat from './chat';
import {connect} from 'react-redux';
import { fetchThread } from '../../actions/thread_actions';

const mapStateToProps = ({session: {currentUser}, chat}, ownProps) => {
  const id = ownProps.params.id[1];
  return {
    id,
    chat,
    currentUser: currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchThread: (id) => dispatch(fetchThread(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
