import React from 'react';
import LoginPage from './LoginPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: {
        show: false,
        message: ''
      }
    };
  }

  handleShowAlert(message){
    console.log(message);
    this.setState({alert: { show: true, message }});
  }

  render() {
    const { alert } = this.state;
    return (
      <div id="content">
        <LoginPage alert={alert} onShowAlert={(message, e) => this.handleShowAlert(message, e)}/>
      </div>
    );
  }
}
