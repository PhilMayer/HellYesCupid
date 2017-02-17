import React from 'react';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import App from './app'
import SessionFormContainer from './signup_signin/session_form_container';
import SignUp from './signup_signin/sign_up';
import Profile from './profile/profile';
import QuestionContainer from './questions/questions_container';

const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
   if(store.getState().session.currentUser) {
     replace('/')
   }
 }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ QuestionContainer } />
          <Route path="/login" component={ SessionFormContainer } />
          <Route path="/signup" component={ SignUp } />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
