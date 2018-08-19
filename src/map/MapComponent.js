import React, { Component } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { action, observable } from "mobx";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { LoactionSearch } from "./LocationSearch";
import { SystemFlex, SystemSpace } from "../system";

@GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_API })
@observer
export class MapComponent extends Component {
  @observable
  location = { lat: 0, lng: 0 };
  @observable
  viewport = null;
  @observable
  searchBox = null;

  @action
  searchBoxHandler = () => {
    this.searchBox &&
      this.searchBox.addListener("places_changed", () => {
        var places = this.searchBox.getPlaces();
        this.location = places[0].geometry.location;
        this.viewport = places[0].geometry.viewport;
      });
  };

  componentDidMount() {
    const input = document.getElementById("google-search-input");
    this.searchBox = new this.props.google.maps.places.SearchBox(input);
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
      <MapContainer>
        <Map
          style={mapStyle}
          google={this.props.google}
          zoom={8}
          bounds={bounds}
        />
      </MapContainer>
    );
  }
}

const MapContainer = styled.div`
  width: 500px;
  height: 500px;
  overflow: hidden;
`;

const mapStyle = {
  position: "absolute",
  width: "500px",
  height: "500px",
  overflow: "hidden"
};
