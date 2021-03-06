import React from 'react';
import Matches from './matches';
import {connect} from 'react-redux';
import { fetchMatches } from '../../actions/user_actions';

const mapStateToProps = ({matches, session: {currentUser}}) => {
  let arrayOfMatches = Object.keys(matches).map(id => matches[id])
  return {
    currentUser,
    matches: arrayOfMatches
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMatches: (params) => dispatch(fetchMatches(params))
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps)(Matches);
