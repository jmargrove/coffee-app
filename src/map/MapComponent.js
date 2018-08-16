import React, { Component } from "react";
import styled from "styled-components";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const MapContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightdark};
  height: 500px;
  width: 500px;
`;

@GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_API })
export class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: { lat: 0, lng: 0, zoom: 8 },
      viewport: null
    };
  }
  searchBoxHandler = () => {
    const input = document.getElementById("google-search-input");
    const searchBox = new this.props.google.maps.places.SearchBox(input);
    searchBox.addListener("places_changed", () => {
      var places = searchBox.getPlaces();
      this.setState({
        location: places[0].geometry.location,
        viewport: places[0].geometry.viewport
      });
    });
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          zoom: 8
        }
      });
    });
  }

  render() {
    this.searchBoxHandler();
    const bounds = new this.props.google.maps.LatLngBounds();
    if (!this.state.viewport) {
      bounds.extend(this.state.location);
    } else {
      bounds.union(this.state.viewport);
    }

    return (
      <Map
        style={{ width: "500px", height: "500px" }}
        google={this.props.google}
        zoom={this.state.location.zoom}
        bounds={bounds}
      >
        <Marker position={this.state.location} />
      </Map>
    );
  }
}

// export class MapComponent extends Component {
//   render() {
//     return <Mapper />;
//   }
// }
