import React from 'react';

export default class LoginPage extends React.Component {
  render() {
    return (
      <form>
        <div>
          <input
            type="user"
            id="email"
            name="email"
            value=""
          />
          <label htmlFor="name">
            User
          </label>
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            value=""
          />
          <label htmlFor="name">
            Password
          </label>
        </div>
      </form>
    )
  }
}
