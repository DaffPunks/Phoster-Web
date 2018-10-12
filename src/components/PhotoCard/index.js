import React from "react";
import './style.scss';

// Home page component
export default class PhotoCard extends React.Component {
  styling() {
    return {
      backgroundImage: 'url("https://japan-magazine.jnto.go.jp/jnto2wm/wp-content/uploads/1608_special_TOTO_main.jpg")'
    }
  };

  // render
  render() {
    return (
      <div className="photo-card">
        <div className="photo-card-img" style={this.styling()}></div>
      </div>
    );
  }
}
