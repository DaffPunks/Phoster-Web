import React from "react";
import './style.scss';

// Home page component
export default class Empty extends React.Component {
  // render
  render() {
    return (
      <div className="empty">
        <div className="empty-text"> Кажется, в вашей ленте пусто</div>
        <div className="empty-text-sub">Зайдите в приложение и начните отправлять фото случайным людям.</div>
      </div>
    );
  }
}
