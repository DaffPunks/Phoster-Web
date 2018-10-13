import React from "react";
import './style.scss';
import AuthService from "../../services/AuthService";

// Home page component
export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '12341234',
      loading: false
    };

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
    this.setState({loading: true});

    event.preventDefault();

    // CALLBACK HELL MAMA MIA
    AuthService.login(this.state.username, this.state.password)
      .then(json => {
        if (json.token) {
          AuthService.setToken(json.token);
          this.props.router.push('/');
        } else {
          AuthService.register(this.state.username, this.state.password)
            .then(json => {
              if (json.token) {
                AuthService.setToken(json.token);
                this.props.router.push('/');
              } else {
                alert('Wrong Password. Bad Password!');
              }
            })
            .catch(err => {
              alert('Oiii. Something bad happens!');
              console.log('ERR', err);
            });
        }
        this.setState({loading: false});
      });

  }

  // render
  render() {
    return (
      <div className="page-login">
        <div className="page-login-component">
          <div className="login">
            <form onSubmit={this.handleSubmit} className="login-modal">
              <div className={"login-modal-logo " + (this.state.loading ? 'loading' : '')}>
                <img src="images/logo.png" alt="Logo"/>
              </div>
              <div className="login-modal-title">Phoster</div>
              <div className="login-modal-title-sub">Для того, чтобы войти, введите номер телефона.</div>
              <input
                type="text"
                className="login-modal-enter"
                placeholder="Phone Number"
                value={this.state.username}
                onChange={this.handleUsername}
              />
              {/*<input
                type="password"
                className="login-modal-enter"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlePassword}
              />*/}
              <input type="submit" value="Войти" className="login-modal-enter-btn"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
