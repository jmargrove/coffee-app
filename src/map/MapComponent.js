import React, { Component } from "react";
import styled from "styled-components";
// import GoogleMapLoader from "react-google-maps-loader";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

// import { LoactionSearch } from "./LocationSearch";
// import { observer } from "mobx-react";
// import { observable, computed } from "../../node_modules/mobx";
require("dotenv").config();

export const MapContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightdark};
  height: 500px;
  width: 500px;
`;

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: { lat: 0, lng: 0 },
      viewport: null
    };
  }
  searchBoxHandler = () => {
    const input = document.getElementById("google-search-input");
    const searchBox = new this.props.google.maps.places.SearchBox(input);
    searchBox.addListener("places_changed", () => {
      var places = searchBox.getPlaces();
      const coords = places[0].geometry.location;
      console.log(places);
      this.setState({
        location: places[0].geometry.location,
        viewport: places[0].geometry.viewport
      });
    });
    // console.log("newlocation", newLocation);
  };
  render() {
    this.searchBoxHandler();
    console.log(this.state.location);
    console.log(this.props.google);
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
        zoom={14}
        bounds={bounds}
      >
        <Marker position={this.state.location} />

        <InfoWindow onClose={this.onInfoWindowClose} />
      </Map>
    );
  }
}

const Mapper = GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API
})(GoogleMap);

export const MapComponent = () => {
  return <Mapper />;
};
