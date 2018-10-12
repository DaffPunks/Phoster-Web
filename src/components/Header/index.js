import React from "react";
import './style.scss';

// Home page component
export default class Header extends React.Component {
  // render
  render() {
    return (
      <div className="header">
        <div className="header-title">Название приложухи</div>
      </div>
    );
  }
}
