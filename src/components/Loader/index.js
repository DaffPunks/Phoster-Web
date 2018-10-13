import React from "react";
import './style.scss';

// Home page component
export default class Loader extends React.Component {
  // render
  render() {
    return (
      <div className="loader">
        <img src='images/loader.gif' alt="Loader"/>
      </div>
    );
  }
}
