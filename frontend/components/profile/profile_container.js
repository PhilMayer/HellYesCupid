import React from 'react';
import Profile from './profile';
import {connect} from 'react-redux';
import {fetchUser} from '../../actions/user_actions';

// const mapStateToProps = (state, ownProps) => {
//   return {id: ownProps.params.id};
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUser: (id) => dispatch(fetchUser(id))
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Profile);
