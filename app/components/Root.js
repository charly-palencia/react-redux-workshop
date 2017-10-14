import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router'
import { Provider } from 'react-redux';
import App from './App';
import Example from './Example';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={App}/>
            <Route exact path="/example" component={Example}/>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
