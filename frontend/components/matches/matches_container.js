import React from 'react';
import Matches from './matches';
import {connect} from 'react-redux';
import { fetchMatches } from '../../actions/user_actions';

const mapStateToProps = ({matches}) => {
  let arrayOfMatches = Object.keys(matches).map(id => matches[id])
  return {matches: arrayOfMatches}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMatches: () => dispatch(fetchMatches())
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps)(Matches);
