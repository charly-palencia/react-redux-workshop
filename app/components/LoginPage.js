import React from 'react';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user: {
        email: 'test@test.com',
        password: 'Password'
      }
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleLogin(event){
    event.preventDefault();
    const { email, password } = this.state;
    if(!email || !password){
      return this.props.onShowAlert('i need data!');
    }

    if(email==this.state.email && password == this.state.password){
      this.props.onSetLoggedUser({email , password});
    }
    this.props.onHideAlert('i need data!');
  }

  handleChange(event){
    const { id, value } = event.target;
    let data = Object.assign({}, self.state);
    data[id] = value;
    this.setState(data);
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
        </div>
      <button onClick={this.handleLogin}>
          Login
        </button>
      </form>
    )
  }
}
