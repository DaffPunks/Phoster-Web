import React from "react";
import './style.scss';
import AuthService from "../../services/AuthService";

// Home page component
export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUsername(event) {
    this.setState({username: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state.username, this.state.password);

    /*fetch('http://localhost:8081/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then((data) => data.json())
      .then(data => {
        AuthMiddleware.setToken(data.token);
      })
      .catch((err) => {
        console.log('ON_LOGIN', err);
      });*/

    AuthService.login(this.state.username, this.state.password)
      .then(json => {
        AuthService.setToken(json.token);
      });

  }

  // render
  render() {
    return (
      <div className="page-login">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.handleUsername}/>
          <input type="password" value={this.state.password} onChange={this.handlePassword}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
