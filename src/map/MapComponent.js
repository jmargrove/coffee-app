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
  render() {
    console.log(this.props.google.maps.places);
    const searchBox = new this.props.google.maps.places.SearchBox(input);
    return (
      <Map
        style={{ width: "500px", height: "500px" }}
        google={this.props.google}
        zoom={14}
      >
        {/* <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{"this.state.selectedPlace.name"}</h1>
          </div>
        </InfoWindow> */}
      </Map>
    );
  }
}

const Mapper = GoogleApiWrapper({
  apiKey: "AIzaSyCEuDD9MNc8PVC94FavBG4hCgSXjbGRODU"
})(GoogleMap);

export const MapComponent = () => {
  return <Mapper />;
};
