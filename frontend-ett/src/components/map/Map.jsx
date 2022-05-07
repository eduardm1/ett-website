
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import GoogleMapReact from 'google-map-react';

import './map.css';

const mapStyles = {
  width: '40%',
  height: '40%',
  borderImage: 'url("../../assets/grid_border_only.png") 27 23 / 50px 30px / 1rem round space',
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        resetBoundsOnResize = {true}
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={
          {
            lat: 52.243200,
            lng: 6.852020
          }
        }
        containerStyle={{ 
          width: '1200px', 
          height: '1200px',
          // position: 'relative',
        }}

      >
        <Marker
        onClick={this.onMarkerClick}
        name={'Esports Team Twente'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCObJOYsnLYCj2bE6as8MssuIF5meHVRCs'
})(MapContainer);
