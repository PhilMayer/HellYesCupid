import React from 'react';
import Profile from './profile';
import {connect} from 'react-redux';
// import {fetchUser} from '../../actions/user_actions';

const mapStateToProps = ({session: {currentUser}}) => {
  return {ownId: currentUser.id};
};
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUser: (id) => dispatch(fetchUser(id))
//   };
// };
//
export default connect(mapStateToProps)(Profile);
