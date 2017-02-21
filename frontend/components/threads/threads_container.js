import React from 'react';
import Threads from './threads';
import {connect} from 'react-redux';
import { fetchThreads } from '../../actions/thread_actions';

const mapStateToProps = ({threads}) => {
  return {threads}
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchThreads: () => dispatch(fetchThreads())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Threads);
