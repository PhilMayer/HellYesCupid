import React from 'react';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import App from './app'
import Profile from './profile/profile';
import SignUp from './signup_signin/sign_up';
import ChatContainer from './chat/chat_container';
import ThreadsContainer from './threads/threads_container';
import ProfileContainer from './profile/profile_container';
import MatchesContainer from './matches/matches_container';
import QuestionContainer from './questions/questions_container';
import SessionFormContainer from './signup_signin/session_form_container';
import ProfileQuestionsContainer from './profile/profile_questions_container';

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
          <IndexRoute component={ SignUp } />
          <Route path="/signup" component={ SignUp } />
          <Route path="/login" component={ SessionFormContainer } />
          <Route path="/matches" component={ MatchesContainer } />
          <Route path="/questions" component={ QuestionContainer } />
          <Route path="/threads" component={ ThreadsContainer } />
          <Route path="/threads/:id" component={ ChatContainer } />
          <Route path="/profile/:id" component={ ProfileContainer }>
            <IndexRoute component={ProfileQuestionsContainer} />
            <Route path="/profile/:id/threads" component={ ThreadsContainer } />
            <Route path="/profile/:id/threads/:id" component={ ChatContainer } />
            <Route path="/profile/:id/questions" component={ QuestionContainer }/>
          </Route>
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
