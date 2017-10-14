import ReactDOM from 'react-dom';
import React from 'react';
import reducers from './reducers';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import Root from './components/Root';


// Build the middleware for intercepting and dispatching navigation actions
const history =createHistory()
const router= routerMiddleware(history)
const middlewares = compose(applyMiddleware(router));
const store = createStore(reducers, {}, middlewares);

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
