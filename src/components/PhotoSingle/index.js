import React from "react";
import './style.scss';
import {Gmaps, Marker } from 'react-gmaps';

const params = {v: '3.exp', key: 'AIzaSyDtGSwjhnBEodc5HQBYuALvuHXBeDTKMbc'};

const gmapsStyle = [
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#d3d3d3"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "color": "#808080"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#b3b3b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#ffffff"
      },
      {
        "weight": 1.8
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#d7d7d7"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#ebebeb"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#a7a7a7"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#efefef"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#696969"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#737373"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#d6d6d6"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {},
  {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  }
];

// Home page component
export default class PhotoSingle extends React.Component {

  constructor() {
    super();


  }

  onMapCreated(map) {
    map.setOptions({
      styles: gmapsStyle
    });
  }




  render() {
    return (
      <div className="single">
        <div className="single-ration">
          <div className="single-block single-photo">
            <div className="single-photo-img" style={{backgroundImage: `url('${this.props.item.url}')`}}/>
            <div className="single-photo-icon single-photo-exit" onClick={this.props.onExitClick}/>
            <div className="single-photo-icon single-photo-share"/>
            <div className="single-photo-icon single-photo-report"/>
          </div>
          <div className="single-block single-map">
            <Gmaps
              ref='Gmaps'
              width={'100%'}
              height={'100%'}
              lat={this.props.item.lat}
              lng={this.props.item.long}
              zoom={6}
              loadingMessage={'Be happy'}
              params={params}
              onMapCreated={this.onMapCreated}>
              >
              <Marker
                lat={this.props.item.lat}
                lng={this.props.item.long} />
            </Gmaps>
            <div className="single-map-like"/>
          </div>
        </div>
      </div>
    );
  }
}
