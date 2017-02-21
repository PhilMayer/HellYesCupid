import React from 'react';
import Threads from './threads';
import {connect} from 'react-redux';
import { fetchThreads } from '../../actions/thread_actions';

const mapStateToProps = ({threads}) => {
  const arrayOfThreads = Object.keys(threads).map(id => threads[id]);
  return {threads: arrayOfThreads}
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchThreads: () => dispatch(fetchThreads())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Threads);
