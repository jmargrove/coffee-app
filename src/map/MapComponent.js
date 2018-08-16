import React, { Component } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { action, observable } from "mobx";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

const MapContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightdark};
  height: 500px;
  width: 500px;
`;

@GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_API })
@observer
export class MapComponent extends Component {
  @observable
  location = { lat: 0, lng: 0 };
  @observable
  viewport = null;

  @action
  searchBoxHandler = () => {
    const input = document.getElementById("google-search-input");
    const searchBox = new this.props.google.maps.places.SearchBox(input);
    searchBox.addListener("places_changed", () => {
      var places = searchBox.getPlaces();
      (this.location = places[0].geometry.location),
        (this.viewport = places[0].geometry.viewport);
    });
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    });
  }

  render() {
    this.searchBoxHandler();
    const bounds = new this.props.google.maps.LatLngBounds();
    if (!this.viewport) {
      bounds.extend(this.location);
    } else {
      bounds.union(this.viewport);
    }

    return (
      <Map
        style={{ width: "500px", height: "500px" }}
        google={this.props.google}
        zoom={8}
        bounds={bounds}
      >
        <Marker position={this.location} />
      </Map>
    );
  }
}
