import React from 'react';
import PropTypes from 'prop-types';
import * as userActions from '../actions/user-actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LoginPage extends React.Component {
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
    this.props.actions.loginUser('', '');
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
};

LoginPage.propTypes = {
  alertInstance: PropTypes.object,
  onShowAlert: PropTypes.func.isRequired,
  onHideAlert: PropTypes.func.isRequired,
  onSetLoggedUser: PropTypes.func.isRequired,
  loggedUser: PropTypes.object
};

function mapStateToProps(state){
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
