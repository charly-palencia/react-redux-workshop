import ReactDOM from 'react-dom';
import React from 'react';
import reducers from './reducers';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import Root from './components/Root';

const store = createStore(reducers, module.hot && module.hot.data && module.hot.data.counter || 0);
const history =createHistory()

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default);
  });
}

const load = () => {
  ReactDOM.render(
    <Root store={store} history={history}/>,
    document.querySelector('#app')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
