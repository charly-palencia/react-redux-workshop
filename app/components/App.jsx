import React from 'react';
import LoginPage from './LoginPage';
import { Link } from 'react-router-dom'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertInstance: {
        show: false,
        message: ''
      },
      loggedUser: null
    };
    this.handleShowAlert = this.handleShowAlert.bind(this);
    this.handleHideAlert = this.handleHideAlert.bind(this);
    this.handleSetLoggedUser = this.handleSetLoggedUser.bind(this);
  }

  handleShowAlert(message){
    this.setState({alertInstance: { show: true, message }});
  }

  handleHideAlert(message){
    this.setState({alertInstance: { show: false, message: ''}});
  }

  handleSetLoggedUser(user){
    this.setState({loggedUser: user});
  }

  render() {
    const { alertInstance, loggedUser } = this.state;
    return (
      <div id="content" className="w3-container">
        {alertInstance.show ?
          <div className="w3-panel w3-blue">
            <p>
              {alertInstance.message}
            </p>
          </div>
        : null }
        <li><Link to="/example">Example</Link></li>
        <LoginPage
          alertInstance={alertInstance}
          onShowAlert={this.handleShowAlert}
          onHideAlert={this.handleHideAlert}
          onSetLoggedUser={this.handleSetLoggedUser}
          loggedUser={this.loggedUser}
        />
      </div>
    );
  }
}
