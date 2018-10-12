import React from "react";
import './style.scss';

// Home page component
export default class PhotoCard extends React.Component {
  styling = () => {
    return {
      "background-image": 'url("")'
    }
  };

  // render
  render() {
    return (
      <div className="photo-card">
        <div style={this.styling}>asd</div>
      </div>
    );
  }
}
