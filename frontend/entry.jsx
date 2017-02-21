import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './actions/session_actions';
import configureStore from './store/store.js';
import Root from './components/root';
import {fetchThread} from './actions/thread_actions';

window.fetchThread = fetchThread;

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
