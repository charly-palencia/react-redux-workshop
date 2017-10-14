import React from 'react';
import LoginPage from './LoginPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: {
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
    this.setState({alert: { show: true, message }});
  }

  handleHideAlert(message){
    this.setState({alert: { show: false, message: ''}});
  }

  handleSetLoggedUser(user){
    this.setState({loggedUser: user});
  }

  render() {
    const { alert, loggedUser } = this.state;
    return (
      <div id="content" className="w3-container">
        {alert.show ?
          <div className="w3-panel w3-blue">
            <p>
              {alert.message}
            </p>
          </div>
        : null }

        {loggedUser ?
          <div>
            Hi!
          </div>
        :
          <LoginPage
            alert={alert}
            onShowAlert={this.handleShowAlert}
            onHideAlert={this.handleHideAlert}
            onSetLoggedUser={this.handleSetLoggedUser}
            loggedUser={this.handleSetLoggedUser}
          />
        }
      </div>
    );
  }
}
