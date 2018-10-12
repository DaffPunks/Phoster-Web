import React from "react";
import './style.scss';

// Home page component
export default class Login extends React.Component {
  // render
  render() {
    return (
      <div className="login">
        <div className="login-modal">
          <div className="login-modal-logo"></div>
          <div className="login-modal-title">Название</div>
          <div className="login-modal-title-sub">Для того, чтобы войти, введите номер телефона.</div>
          <input type="number" className="login-modal-enter" placeholder="+7-910-420-1234" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></input>
          <input type="submit" value="Войти" className="login-modal-enter-btn"></input>
        </div>
      </div>
    );
  }
}
