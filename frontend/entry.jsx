import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './actions/session_actions';
import configureStore from './store/store.js';
import Root from './components/root';
import {fetchMatches} from './actions/user_actions';

window.fetchMatches = fetchMatches;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if(window.currentUser) {
      const preloadedState = {session: {currentUser: window.currentUser}};
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }
    window.store = store;
    ReactDOM.render(<Root store={store} />, root);
});
