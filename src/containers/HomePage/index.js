import React from "react";
import './style.scss';
import Header from '../../components/Header';
import Empty from "../../components/Empty";
import PhotoCard from "../../components/PhotoCard";
import Login from "../../components/LoginModal";

// Home page component
export default class HomePage extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <div className="header-component">
          <Header/>
        </div>
       {/* <div className="empty-block">
          <Empty/>
        </div>*/}
        <div className="photo-card-component">
          <PhotoCard/>
        </div>
        <div className="login-component">
          <Login/>
        </div>я
      </div>
    );
  }
}
