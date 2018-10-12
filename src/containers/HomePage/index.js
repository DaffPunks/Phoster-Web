import React from "react";
import './style.scss';
import Header from '../../components/Header';
import Empty from "../../components/Empty";
import PhotoCard from "../../components/PhotoCard";

// Home page component
export default class HomePage extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <div className="header-component">
          <Header/>
        </div>
        <div className="container page-home-container">
         {/* <div className="empty-block">
            <Empty/>
          </div>*/}
          <div className="photo-card-component row">
            <div className="col-6 photo-card-item">
              <PhotoCard/>
            </div>
            <div className="col-6 photo-card-item">
              <PhotoCard/>
            </div>
            <div className="col-6 photo-card-item">
              <PhotoCard/>
            </div>
            <div className="col-6 photo-card-item">
              <PhotoCard/>
            </div>
            <div className="col-6 photo-card-item">
              <PhotoCard/>
            </div>
            <div className="col-6 photo-card-item">
              <PhotoCard/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
