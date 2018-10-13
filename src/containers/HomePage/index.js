import React from "react";
import './style.scss';
import Header from '../../components/Header';
import Empty from "../../components/Empty";
import PhotoCard from "../../components/PhotoCard";
import PhotosService from "../../services/PhotosService";
import AuthService from "../../services/AuthService";
import Loader from "../../components/Loader";
import PhotoSingle from "../../components/PhotoSingle";

// Home page component
export default class HomePage extends React.Component {

  constructor() {
    super();

    this.state = {
      status: 0,  // 0 - Loading; 1 - Loaded
      feed: [],
      currentPhoto: null
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

  logout() {
    AuthService.deleteToken();
    this.props.router.push('/login');
  }

  openSingle(item) {
    this.setState({currentPhoto: item});
  }

  closeSingle() {
    this.setState({currentPhoto: null});
  }

  // render
  render() {

    if (this.state.status === 0) {

      this.content =
        <div className="loader-component">
          <Loader/>
        </div>;

    } else if (this.state.status === 1 && this.state.feed.length === 0) {

      this.content =
        <div className="empty-block">
          <Empty/>
        </div>;

    } else if (this.state.status === 1 && this.state.feed.length !== 0) {

      this.content =
        <div className="photo-card-component row">
          {this.state.feed.map((item, index) =>
            <div key={index} className="col-md-6 col-12 photo-card-item" >
              <PhotoCard onImageClick={this.openSingle.bind(this, item)}/>
            </div>
          )}
        </div>;

    }

    if (this.state.currentPhoto)
      this.single =
        <div className="single-container">
          <div className="single-bg"/>
          <div className="single-wrap">
            <PhotoSingle item={this.state.currentPhoto} onExitClick={this.closeSingle.bind(this)}/>
          </div>
        </div>;
    else
      this.single = null;

    return (
      <div className="page-home">
        <div className="header-component">
          <Header onLogout={this.logout.bind(this)}/>
        </div>
        <div className="container page-home-container">
          {this.content}
        </div>
        {this.single}
      </div>
    );
  }
}
