import React from 'react';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleLogin(event){
    event.preventDefault();
    const { email, password } = this.state;
    if(!email && !password){
      this.props.onShowAlert('i need data!');
    }
  }

  render() {
    const { alert } = this.props;
    const { email, password } = this.state;

    return (
      <form>
        <div>
          <label htmlFor="name">
            User
          </label>
          <input
            type="user"
            id="email"
            name="email"
            value={email}
          />
        </div>
        <div>
          <label htmlFor="name">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
          />
        </div>
      <button onClick={(e) => this.handleLogin(e)}>
          Login
        </button>
      </form>
    )
  }
}
