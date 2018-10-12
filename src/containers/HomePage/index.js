import React from "react";
import './style.scss';
import Header from '../../components/Header';
import Empty from "../../components/Empty";
import PhotoCard from "../../components/PhotoCard";
import PhotosService from "../../services/PhotosService";

// Home page component
export default class HomePage extends React.Component {

  constructor() {
    super();

    this.state = {
      status: 0,  // 0 - Loading; 1 - Loaded
      feed: []
    };

  }

  componentDidMount() {
    this.updateFeed();
  }

  updateFeed() {
    // Loading screen
    this.setState({status: 0});

    // Fetch shit
    PhotosService.getPhotos()
      .then((json) => {
        this.setState({status: 1});
        this.setState({feed: json});
      });
  }


  // render
  render() {

    if (this.state.status === 0) {

      this.content =
        <div className="loading">LOADIN</div>;

    } else if (this.state.status === 1 && this.state.feed.length === 0) {

      this.content =
        <div className="empty-block">
          <Empty/>
        </div>;

    } else if (this.state.status === 1 && this.state.feed.length !== 0) {

      this.content =
        <div className="photo-card-component row">
          {this.state.feed.map((item, index) =>
            <div key={index} className="col-md-6 col-12 photo-card-item">
              <PhotoCard />
            </div>
          )}
        </div>;

    }


    return (
      <div className="page-home">
        <div className="header-component">
          <Header/>
        </div>
        <div className="container">
          {this.content}
        </div>
      </div>
    );
  }
}
