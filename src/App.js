import React from "react";
import "./style.scss";

// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
