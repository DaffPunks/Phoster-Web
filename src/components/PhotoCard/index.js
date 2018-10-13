import React from "react";
import './style.scss';

// Home page component
export default class PhotoCard extends React.Component {
  styling() {
    return {
      backgroundImage: `url("${this.props.image}")`
    }
  };

  // render
  render() {
    return (
      <div className="photo-card" onClick={this.props.onImageClick}>
        <div className="photo-card-img" style={this.styling()}></div>
      </div>
    );
  }
}
